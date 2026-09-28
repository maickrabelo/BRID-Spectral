const fs = require('fs');
let content = fs.readFileSync('src/pages/Validation.tsx', 'utf8');

// The lines 128-132 should be:
/*
                <tr className="bg-cyan-950/50 text-blue-400  text-[10px] uppercase tracking-widest border-b border-white/10">
                  <th className="px-6 py-4 border-b border-white/10">Phase</th>
                  <th className="px-6 py-4 border-b border-white/10">What Can Go Wrong</th>
                  <th className="px-6 py-4 border-b border-white/10">Fallback / Decision Rule</th>
                </tr>
*/

content = content.replace(
  /<th className="px-6 py-4 border-b border-white\/10">Phase<\/th>Can Go Wrong<\/th>/g,
  '<th className="px-6 py-4 border-b border-white/10">What Can Go Wrong</th>'
);

content = content.replace(
  /<th className="px-6 py-4 border-b border-white\/10">Phase<\/th>\/ Decision Rule<\/th>/g,
  '<th className="px-6 py-4 border-b border-white/10">Fallback / Decision Rule</th>'
);

// line 128 has a missing ">"
content = content.replace(
  /<tr className="bg-cyan-950\/50 text-blue-400  text-\[10px\] uppercase tracking-widest border-b border-white\/10"\n/g,
  '<tr className="bg-cyan-950/50 text-blue-400 text-[10px] uppercase tracking-widest border-b border-white/10">\n'
);

fs.writeFileSync('src/pages/Validation.tsx', content);
