const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Desktop Nav
  if (content.includes('Our Divisions') && !content.includes('Our Products')) {
      content = content.replace(
        /<li><a href="about\.html">About Us<\/a><\/li>/,
        '<li><a href="products.html">Our Products</a></li>\n      <li><a href="about.html">About Us</a></li>'
      );
  }

  // Mobile Nav
  if (!content.includes('<a href="products.html">Our Products</a>')) {
      content = content.replace(
        /<a href="about\.html">About Us<\/a>/,
        '<a href="products.html">Our Products</a>\n    <a href="about.html">About Us</a>'
      );
  }

  fs.writeFileSync(file, content);
  console.log(`Updated nav for ${file}`);
});
