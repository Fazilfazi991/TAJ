const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.js'));

const replacements = {
  '#23194e': '#23194e', // Primary
  '#382b6e': '#382b6e', // Primary Light
  '#e9e7f1': '#e9e7f1', // Primary Pale
};

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldColor, newColor] of Object.entries(replacements)) {
    const regex = new RegExp(oldColor, 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, newColor);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
}
