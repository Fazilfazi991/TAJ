(() => {
  const localStoreKey = 'tajProductAdminState';

  function config() {
    return window.TAJ_SUPABASE_CONFIG || {};
  }

  function isConfigured() {
    const { url, anonKey } = config();
    return Boolean(
      url &&
      anonKey &&
      !url.includes('PASTE_YOUR_SUPABASE') &&
      !anonKey.includes('PASTE_YOUR_SUPABASE')
    );
  }

  function localState() {
    try {
      return JSON.parse(localStorage.getItem(localStoreKey)) || { added: [], edits: {}, deleted: [] };
    } catch (error) {
      return { added: [], edits: {}, deleted: [] };
    }
  }

  function saveLocalState(state) {
    localStorage.setItem(localStoreKey, JSON.stringify(state));
  }

  function endpoint(path = '') {
    return `${config().url.replace(/\/$/, '')}/rest/v1/products${path}`;
  }

  async function request(path, options = {}) {
    const response = await fetch(endpoint(path), {
      ...options,
      headers: {
        apikey: config().anonKey,
        Authorization: `Bearer ${config().anonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        ...(options.headers || {}),
      },
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Supabase request failed with status ${response.status}`);
    }

    if (response.status === 204) return null;
    return response.json();
  }

  function rowToProduct(row) {
    return {
      id: row.id,
      source: row.source,
      category: row.category,
      name: row.product_name,
      imageSrc: row.image_src,
      isDeleted: row.is_deleted,
    };
  }

  function productToRow(product, isDeleted = false) {
    return {
      id: product.id,
      source: product.source,
      category: product.category,
      product_name: product.name,
      image_src: product.imageSrc,
      is_deleted: isDeleted,
    };
  }

  function rowsToState(rows) {
    return rows.reduce((state, row) => {
      const product = rowToProduct(row);
      if (product.source === 'custom' && !product.isDeleted) {
        state.added.push(product);
      }
      if (product.source === 'default' && product.isDeleted) {
        state.deleted.push(product.id);
      }
      if (product.source === 'default' && !product.isDeleted) {
        state.edits[product.id] = {
          name: product.name,
          category: product.category,
          imageSrc: product.imageSrc,
        };
      }
      return state;
    }, { added: [], edits: {}, deleted: [] });
  }

  async function loadState() {
    if (!isConfigured()) return localState();
    try {
      const rows = await request('?select=*');
      return rowsToState(rows || []);
    } catch (error) {
      console.warn('Supabase products unavailable, using local dashboard state.', error);
      return localState();
    }
  }

  async function saveState(state) {
    if (!isConfigured()) {
      saveLocalState(state);
      return;
    }

    await request('?id=not.is.null', { method: 'DELETE' });
    const rows = [
      ...(state.added || []).map((product) => productToRow(product, false)),
      ...Object.entries(state.edits || {}).map(([id, product]) => productToRow({
        id,
        source: 'default',
        category: product.category,
        name: product.name,
        imageSrc: product.imageSrc,
      }, false)),
      ...(state.deleted || []).map((id) => productToRow({
        id,
        source: 'default',
        category: 'deleted',
        name: id,
        imageSrc: '',
      }, true)),
    ];

    if (rows.length) {
      await request('', { method: 'POST', body: JSON.stringify(rows) });
    }
  }

  async function clearState() {
    if (!isConfigured()) {
      localStorage.removeItem(localStoreKey);
      return;
    }
    await request('?id=not.is.null', { method: 'DELETE' });
  }

  window.TajProductsStore = {
    isConfigured,
    loadState,
    saveState,
    clearState,
  };
})();
