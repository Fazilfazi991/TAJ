(() => {
  const WHATSAPP_NUMBER = '966555040912';

  const whatsappIcon = '<svg class="whatsapp-icon" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65.1-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 365.5l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.4 0 101.7-82.8 184.5-184.5 184.5zm100.5-138c-5.5-2.8-32.6-16.1-37.7-18-5.1-1.9-8.8-2.8-12.4 2.8-3.6 5.6-14.1 18-17.3 21.6-3.2 3.6-6.4 4-11.9 1.3-5.5-2.8-23.3-8.6-44.4-27.5-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.4 8.3-9.6 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.6-1.5-2.8-12.4-29.8-17-40.8-4.5-10.8-9.1-9.3-12.4-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.6-13.3 37.2-26.2 4.6-12.9 4.6-24 3.2-26.2-1.4-2.2-5.1-3.6-10.6-6.4z"/></svg>';

  function slug(value) {
    return String(value || '')
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function currentCategory() {
    const page = location.pathname.split('/').pop().replace('.html', '');
    return page.replace('products-', '') || 'foods';
  }

  function defaultProductsFromPage(category, grid) {
    return Array.from(grid.querySelectorAll('.product-item')).map((item) => {
      const img = item.querySelector('img');
      const name = (item.querySelector('.product-name')?.textContent || img?.alt || '').trim();
      return {
        id: `${category}-${slug(name)}`,
        source: 'default',
        category,
        name,
        imageSrc: img?.getAttribute('src') || '',
      };
    }).filter((product) => product.name);
  }

  function enquiryUrl(name) {
    const text = encodeURIComponent(`Hello Taj Middleeast, I am enquiring about the product: ${name}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  function renderCard(product) {
    const item = document.createElement('div');
    item.className = 'product-item';

    const imageBox = document.createElement('div');
    imageBox.className = 'product-img-box';

    const image = document.createElement('img');
    image.src = product.imageSrc;
    image.alt = product.name;
    image.loading = 'lazy';
    imageBox.appendChild(image);

    const name = document.createElement('div');
    name.className = 'product-name';
    name.textContent = product.name;

    const link = document.createElement('a');
    link.href = enquiryUrl(product.name);
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = 'btn-enquiry';
    link.innerHTML = `${whatsappIcon} Enquiry`;

    item.append(imageBox, name, link);
    return item;
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;

    const category = currentCategory();
    const defaults = defaultProductsFromPage(category, grid);
    const state = await window.TajProductsStore.loadState();
    const deleted = new Set(state.deleted || []);
    const edits = state.edits || {};
    const added = (state.added || []).filter((product) => product.category === category);

    const products = defaults
      .filter((product) => !deleted.has(product.id))
      .map((product) => ({ ...product, ...(edits[product.id] || {}) }))
      .concat(added)
      .filter((product) => product.name && product.imageSrc)
      .sort((a, b) => a.name.localeCompare(b.name));

    grid.replaceChildren(...products.map(renderCard));
  });
})();
