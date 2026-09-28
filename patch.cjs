const fs = require('fs');
let content = fs.readFileSync('src/pages/Applications.tsx', 'utf8');
content = content.replace(
  /isOpen \? "bg-cyan-950\/20" : "bg-white\/5 hover:border-white\/10"\)]} key={idx}>/g,
  'isOpen ? "bg-cyan-950/20" : "bg-white/5 hover:border-white/10")}>'
);
fs.writeFileSync('src/pages/Applications.tsx', content);
