(() => {
  const categories = [
    { id: 'foods', name: 'Foods & Beverages', page: 'products-foods.html' },
    { id: 'cleaning', name: 'Cleaning Products', page: 'products-cleaning.html' },
    { id: 'cosmetics', name: 'Cosmetics', page: 'products-cosmetics.html' },
    { id: 'diapers', name: 'Diapers & Tissues', page: 'products-diapers.html' },
    { id: 'household', name: 'Household Items', page: 'products-household.html' },
  ];

  const $ = (selector) => document.querySelector(selector);
  const slug = (value) => String(value || '').toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);

  let defaults = [];
  let imageData = '';
  let currentState = { added: [], edits: {}, deleted: [] };

  function loadState() {
    return currentState;
  }

  async function refreshState() {
    currentState = await window.TajProductsStore.loadState();
  }

  async function saveState(state) {
    currentState = state;
    await window.TajProductsStore.saveState(state);
  }

  function categoryName(id) {
    return categories.find((category) => category.id === id)?.name || id;
  }

  async function loadDefaults() {
    const loaded = await Promise.all(categories.map(async (category) => {
      try {
        const response = await fetch(category.page);
        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return Array.from(doc.querySelectorAll('.product-item')).map((item) => {
          const img = item.querySelector('img');
          const name = (item.querySelector('.product-name')?.textContent || img?.alt || '').trim();
          return {
            id: `${category.id}-${slug(name)}`,
            source: 'default',
            category: category.id,
            name,
            imageSrc: img?.getAttribute('src') || '',
          };
        }).filter((product) => product.name);
      } catch (error) {
        return [];
      }
    }));
    defaults = loaded.flat();
  }

  function mergedProducts() {
    const state = loadState();
    const deleted = new Set(state.deleted || []);
    const edits = state.edits || {};
    return defaults
      .filter((product) => !deleted.has(product.id))
      .map((product) => ({ ...product, ...(edits[product.id] || {}) }))
      .concat(state.added || [])
      .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  }

  function renderStats(products) {
    $('#totalProducts').textContent = products.length;
    $('#customProducts').textContent = products.filter((product) => product.source === 'custom').length;
    $('#hiddenProducts').textContent = (loadState().deleted || []).length;
    $('#connectionStatus').textContent = window.TajProductsStore.isConfigured()
      ? 'Connected to Supabase'
      : 'Using local fallback until Supabase keys are added';
  }

  function renderProducts() {
    const products = mergedProducts();
    const search = $('#searchInput').value.trim().toLowerCase();
    const filter = $('#filterCategory').value;
    const filtered = products.filter((product) => {
      const matchesCategory = filter === 'all' || product.category === filter;
      const matchesSearch = !search || product.name.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });

    renderStats(products);
    $('#productTableBody').replaceChildren(...filtered.map((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${escapeHtml(product.imageSrc)}" alt=""></td>
        <td>
          <strong>${escapeHtml(product.name)}</strong>
          <span>${product.source === 'custom' ? 'Added in dashboard' : 'Original catalogue'}</span>
        </td>
        <td>${escapeHtml(categoryName(product.category))}</td>
        <td>
          <button class="icon-btn" data-action="edit" data-id="${product.id}" title="Edit product">Edit</button>
          <button class="icon-btn danger" data-action="delete" data-id="${product.id}" title="Delete product">Delete</button>
        </td>
      `;
      return row;
    }));
  }

  function clearForm() {
    $('#productId').value = '';
    $('#productName').value = '';
    $('#productCategory').value = 'foods';
    $('#productImage').value = '';
    $('#productFile').value = '';
    $('#formTitle').textContent = 'Add Product';
    $('#submitBtn').textContent = 'Add Product';
    imageData = '';
  }

  function productById(id) {
    return mergedProducts().find((product) => product.id === id);
  }

  function editProduct(id) {
    const product = productById(id);
    if (!product) return;
    $('#productId').value = product.id;
    $('#productName').value = product.name;
    $('#productCategory').value = product.category;
    $('#productImage').value = product.imageSrc.startsWith('data:') ? '' : product.imageSrc;
    $('#formTitle').textContent = 'Edit Product';
    $('#submitBtn').textContent = 'Save Changes';
    imageData = product.imageSrc.startsWith('data:') ? product.imageSrc : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function deleteProduct(id) {
    const state = loadState();
    const product = productById(id);
    if (!product || !confirm(`Delete "${product.name}" from the catalogue?`)) return;

    if (product.source === 'custom') {
      state.added = (state.added || []).filter((item) => item.id !== id);
    } else {
      state.deleted = Array.from(new Set([...(state.deleted || []), id]));
      if (state.edits) delete state.edits[id];
    }

    await saveState(state);
    renderProducts();
    clearForm();
  }

  async function submitProduct(event) {
    event.preventDefault();
    const state = loadState();
    const id = $('#productId').value;
    const name = $('#productName').value.trim();
    const category = $('#productCategory').value;
    const imageSrc = imageData || $('#productImage').value.trim();

    if (!name || !category || !imageSrc) return;

    if (id) {
      const existing = productById(id);
      const updated = { ...existing, name, category, imageSrc };
      if (existing.source === 'custom') {
        state.added = (state.added || []).map((product) => product.id === id ? updated : product);
      } else if (category !== existing.category) {
        state.deleted = Array.from(new Set([...(state.deleted || []), id]));
        if (state.edits) delete state.edits[id];
        state.added = [
          ...(state.added || []),
          { id: `custom-${Date.now()}-${slug(name)}`, source: 'custom', name, category, imageSrc },
        ];
      } else {
        state.edits = { ...(state.edits || {}), [id]: { name, category, imageSrc } };
      }
    } else {
      const customId = `custom-${Date.now()}-${slug(name)}`;
      state.added = [...(state.added || []), { id: customId, source: 'custom', name, category, imageSrc }];
    }

    await saveState(state);
    renderProducts();
    clearForm();
  }

  function setupSelects() {
    const options = categories.map((category) => `<option value="${category.id}">${category.name}</option>`).join('');
    $('#productCategory').innerHTML = options;
    $('#filterCategory').innerHTML = `<option value="all">All categories</option>${options}`;
  }

  document.addEventListener('DOMContentLoaded', async () => {
    setupSelects();
    await loadDefaults();
    await refreshState();
    renderProducts();

    $('#productForm').addEventListener('submit', submitProduct);
    $('#cancelBtn').addEventListener('click', clearForm);
    $('#searchInput').addEventListener('input', renderProducts);
    $('#filterCategory').addEventListener('change', renderProducts);
    $('#resetBtn').addEventListener('click', async () => {
      if (!confirm('Reset all dashboard changes and restore the original catalogue?')) return;
      await window.TajProductsStore.clearState();
      currentState = { added: [], edits: {}, deleted: [] };
      renderProducts();
      clearForm();
    });

    $('#productFile').addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        imageData = reader.result;
        $('#productImage').value = '';
      };
      reader.readAsDataURL(file);
    });

    $('#productTableBody').addEventListener('click', (event) => {
      const button = event.target.closest('button[data-action]');
      if (!button) return;
      if (button.dataset.action === 'edit') editProduct(button.dataset.id);
      if (button.dataset.action === 'delete') deleteProduct(button.dataset.id);
    });
  });
})();
