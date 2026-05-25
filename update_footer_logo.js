const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.js'));

const targetRegex = /<div class="footer-brand">\s*<strong>Taj Middleeast<\/strong>\s*<em>Group of Companies<\/em>/g;
const replacement = `<div class="footer-brand">
        <img src="logo.jpeg" alt="Taj Middle East Co." class="footer-logo-img">`;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (targetRegex.test(content)) {
    content = content.replace(targetRegex, replacement);
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
}
