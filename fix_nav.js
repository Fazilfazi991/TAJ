const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const desktopNav = `<ul class="nav-links">
      <li class="nav-item-dropdown">
        <a href="divisions.html">Our Divisions ▾</a>
        <div class="dropdown-menu">
          <a href="foods.html">Taj Foods</a>
          <a href="recycle.html">Taj Recycle</a>
          <a href="opticals.html">Taj Opticals</a>
          <a href="packaging.html">Taj Packaging</a>
          <a href="electronics.html">Taj Electronics</a>
          <a href="zivo.html">Zivo Perfumes</a>
        </div>
      </li>
      <li class="nav-item-dropdown">
        <a href="products.html">Our Products ▾</a>
        <div class="dropdown-menu">
          <a href="products-foods.html">Foods & Beverages</a>
          <a href="products-cleaning.html">Cleaning Products</a>
          <a href="products-cosmetics.html">Cosmetics</a>
          <a href="products-diapers.html">Diapers & Tissues</a>
          <a href="products-household.html">Household Items</a>
        </div>
      </li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="contact.html" class="nav-cta">Get in Touch</a></li>
    </ul>`;

const mobileNav = `<div class="nav-mobile-menu">
    <div class="mobile-dropdown-container">
      <a class="mobile-dropdown-toggle">Our Divisions</a>
      <div class="mobile-dropdown-menu">
        <a href="divisions.html">All Divisions Overview</a>
        <a href="foods.html">Taj Foods</a>
        <a href="recycle.html">Taj Recycle</a>
        <a href="opticals.html">Taj Opticals</a>
        <a href="packaging.html">Taj Packaging</a>
        <a href="electronics.html">Taj Electronics</a>
        <a href="zivo.html">Zivo Perfumes</a>
      </div>
    </div>
    <div class="mobile-dropdown-container">
      <a class="mobile-dropdown-toggle">Our Products</a>
      <div class="mobile-dropdown-menu">
        <a href="products.html">All Products Overview</a>
        <a href="products-foods.html">Foods & Beverages</a>
        <a href="products-cleaning.html">Cleaning Products</a>
        <a href="products-cosmetics.html">Cosmetics</a>
        <a href="products-diapers.html">Diapers & Tissues</a>
        <a href="products-household.html">Household Items</a>
      </div>
    </div>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
    <a href="contact.html" class="nm-cta">Get in Touch</a>
  </div>`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace whole desktop nav block
    content = content.replace(/<ul class="nav-links">[\s\S]*?<\/ul>/, desktopNav);
    
    // Replace whole mobile nav block
    content = content.replace(/<div class="nav-mobile-menu">[\s\S]*?<\/div>/, mobileNav);

    fs.writeFileSync(file, content);
    console.log(`Fixed nav for ${file}`);
});
