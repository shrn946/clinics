const fs = require('fs');
const path = require('path');

const filesToRecolor = [
  'C:/primecare/public/eye-4/assets/css/style.css',
  'C:/primecare/public/eye-4/assets/css/responsive.css'
];

filesToRecolor.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace hex colors (both uppercase and lowercase)
    content = content.replace(/#02c18d/gi, '#2563eb');
    content = content.replace(/#0098ff/gi, '#0ea5e9');
    
    // Replace RGB/RGBA values
    content = content.replace(/2,\s*193,\s*141/g, '37, 99, 235');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Recolored colors in ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
