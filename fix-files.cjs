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
  
  // Fix the border-white/10 that were stripped of closing quotes
  content = content.replace(/border-white\/10\n/g, 'border-white/10">\n');
  content = content.replace(/border-white\/10 \},\n/g, "border-white/10' },\n");
  content = content.replace(/border-white\/10 idx/g, 'border-white/10", idx');
  content = content.replace(/border-white\/10 isOpen/g, 'border-white/10", isOpen');
  content = content.replace(/border-white\/10<\/th>/g, 'border-white/10"></th>');
  content = content.replace(/border-white\/10 Can/g, 'border-white/10">Can');
  content = content.replace(/border-white\/10 \//g, 'border-white/10">/');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});
