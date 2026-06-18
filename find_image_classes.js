const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const tsxFiles = walk('src');

let count = 0;
tsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  const imageTagRegex = /<Image([\s\S]*?)\/?>/g;
  let match;
  while ((match = imageTagRegex.exec(content)) !== null) {
    const props = match[1];
    // This handles basic classNames. Multi-line or complex clsx/cn might need manual inspection.
    const classMatch = props.match(/className=(?:\{`|`|"|'|\{cn\()([^`"'}]+)(?:`|"|'|\})/);
    if (classMatch) {
      const className = classMatch[1];
      const hasSizeModifiers = /\b(w-\w+|h-\w+|max-w-\w+|max-h-\w+|min-w-\w+|min-h-\w+|size-\w+)\b/.test(className);
      const hasAuto = /\bw-auto\b/.test(className) && /\bh-auto\b/.test(className);
      
      if (hasSizeModifiers && !hasAuto) {
        console.log(`File: ${file}\nClasses: ${className}\n`);
        count++;
      }
    }
  }
});
console.log(`Found ${count} places.`);
