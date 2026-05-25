const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'zivo.html');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace Nav Dropdown
  content = content.replace(
    /<a href="electronics\.html">Taj Electronics<\/a>\s*<\/div>/,
    '<a href="electronics.html">Taj Electronics</a>\n          <a href="zivo.html">Zivo Perfumes</a>\n        </div>'
  );

  // Replace Mobile Dropdown
  content = content.replace(
    /<a href="electronics\.html">Taj Electronics<\/a>\s*<\/div>/,
    '<a href="electronics.html">Taj Electronics</a>\n        <a href="zivo.html">Zivo Perfumes</a>\n      </div>'
  );
  
  // Some files might have different indentation for mobile dropdown, so we replace globally or just use generic regex
  content = content.replace(
    /<a href="electronics\.html">Taj Electronics<\/a>\s*<\/div>/g,
    '<a href="electronics.html">Taj Electronics</a>\n        <a href="zivo.html">Zivo Perfumes</a>\n      </div>'
  );

  // Replace Footer Divisions list
  content = content.replace(
    /<li><a href="electronics\.html">Taj Electronics<\/a><\/li>\s*<\/ul>/g,
    '<li><a href="electronics.html">Taj Electronics</a></li>\n          <li><a href="zivo.html">Zivo Perfumes</a></li>\n        </ul>'
  );

  // Replace Footer Dividers
  content = content.replace(
    /<span class="footer-div-tag">Taj Electronics<\/span>\s*<\/div>/g,
    '<span class="footer-div-tag">Taj Electronics</span>\n        <span class="footer-div-tag">Zivo Perfumes</span>\n      </div>'
  );

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
