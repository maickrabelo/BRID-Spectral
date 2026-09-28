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
  
  content = content.replace(/text-cyan-dim/g, 'text-blue-400/80');
  content = content.replace(/text-cyan-500/g, 'text-blue-400');
  content = content.replace(/text-cyan/g, 'text-blue-400');
  content = content.replace(/bg-cyan-950\/[0-9]+/g, 'bg-[#0f1523]');
  content = content.replace(/bg-cyan-950/g, 'bg-[#0f1523]');
  content = content.replace(/border-cyan\/[0-9]+/g, 'border-blue-500/30');
  content = content.replace(/border-cyan/g, 'border-blue-400');
  content = content.replace(/border-t-cyan/g, 'border-t-blue-400');
  content = content.replace(/bg-cyan/g, 'bg-blue-400');
  content = content.replace(/shadow-cyan-400/g, 'shadow-blue-400');
  
  // also clean up navy colors which were part of old cyberpunk theme
  content = content.replace(/bg-navy-[0-9]+/g, 'bg-[#0f1523]');
  content = content.replace(/bg-off-white/g, 'bg-white/5');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Replaced colors in ${file}`);
  }
});
