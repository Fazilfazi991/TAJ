const fs = require('fs');

let content = fs.readFileSync('recycle.html', 'utf8');

const replacements = [
  {
    target: 'src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=90"',
    replacement: 'src="recycle/recycle%20images/img1.jpeg"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=90"',
    replacement: 'src="recycle/recycle%20images/img2.jpeg"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1200&q=90"',
    replacement: 'src="recycle/recycle%20images/img3.jpeg"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80"',
    replacement: 'src="recycle/recycle%20images/img1.jpeg"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"',
    replacement: 'src="recycle/recycle%20images/img2.jpeg"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=900&q=80"',
    replacement: 'src="recycle/recycle%20images/img3.jpeg"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80"',
    replacement: 'src="recycle/recycle%20images/img4.jpeg"'
  }
];

replacements.forEach(({target, replacement}) => {
  content = content.replace(target, replacement);
});

fs.writeFileSync('recycle.html', content);
console.log('Updated recycle.html images');
