const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const desktopNavSearch = /<li><a href="products\.html">Our Products<\/a><\/li>/g;
const desktopNavReplace = `<li class="nav-item-dropdown">
        <a href="products.html">Our Products ▾</a>
        <div class="dropdown-menu">
          <a href="products-foods.html">Foods & Beverages</a>
          <a href="products-cleaning.html">Cleaning Products</a>
          <a href="products-cosmetics.html">Cosmetics</a>
          <a href="products-diapers.html">Diapers & Tissues</a>
          <a href="products-household.html">Household Items</a>
        </div>
      </li>`;

const mobileNavSearch = /<a href="products\.html">Our Products<\/a>/g;
const mobileNavReplace = `<div class="mobile-dropdown-container">
      <a class="mobile-dropdown-toggle">Our Products</a>
      <div class="mobile-dropdown-menu">
        <a href="products.html">All Products Overview</a>
        <a href="products-foods.html">Foods & Beverages</a>
        <a href="products-cleaning.html">Cleaning Products</a>
        <a href="products-cosmetics.html">Cosmetics</a>
        <a href="products-diapers.html">Diapers & Tissues</a>
        <a href="products-household.html">Household Items</a>
      </div>
    </div>`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Some files might have different formatting, so let's be flexible
    // If it's the old single link version:
    if (content.includes('<li><a href="products.html">Our Products</a></li>')) {
        content = content.replace('<li><a href="products.html">Our Products</a></li>', desktopNavReplace);
    } else if (content.includes('<a href="products.html">Our Products</a>')) {
        // This might be the mobile version or a simple list version
        // We need to check context.
        
        // If it's inside a .nav-links or similar (Desktop)
        if (content.includes('<ul class="nav-links">')) {
             content = content.replace(/<li><a href="products\.html">Our Products<\/a><\/li>/, desktopNavReplace);
        }
        
        // Mobile version
        content = content.replace('<a href="products.html">Our Products</a>', mobileNavReplace);
    }

    fs.writeFileSync(file, content);
    console.log(`Updated nav for ${file}`);
});
