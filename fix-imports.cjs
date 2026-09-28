const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
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

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('cn(') && !content.includes('function cn') && !content.includes('import { cn }') && !content.includes('import {cn}')) {
    console.log(`Fixing ${file}`);
    
    // Calculate the path to src/lib/utils
    const depth = file.split('/').length - 2;
    let importPath = depth === 0 ? './lib/utils' : '../'.repeat(depth) + 'lib/utils';
    if (file.includes('pages/')) {
        importPath = '../lib/utils'; // if src/pages/file.tsx
    }
    
    // Alternatively just use "@/lib/utils" if the project uses path aliases.
    // Let's check tsconfig.json to see if @ is configured.
    // Assuming standard vite with @ -> src
    
    const importStatement = `import { cn } from "@/lib/utils";\n`;
    content = importStatement + content;
    fs.writeFileSync(file, content, 'utf8');
  }
});
