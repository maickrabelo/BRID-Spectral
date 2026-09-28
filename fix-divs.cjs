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
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src/pages');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // They are lines like: <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-white/10">
  // We can just remove lines containing "w-2 h-2 border-" because they are decorative corners
  let lines = content.split('\n');
  lines = lines.filter(line => !line.includes('w-2 h-2 border-'));
  
  content = lines.join('\n');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Removed corners from ${file}`);
  }
});
