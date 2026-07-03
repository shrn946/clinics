const fs = require('fs');
const path = require('path');

function processDir(dirPath) {
  if (fs.lstatSync(dirPath).isDirectory()) {
    fs.readdirSync(dirPath).forEach(file => {
      processDir(path.join(dirPath, file));
    });
  } else {
    const ext = path.extname(dirPath).toLowerCase();
    if (['.tsx', '.ts', '.js', '.css', '.html', '.json'].includes(ext)) {
      let content = fs.readFileSync(dirPath, 'utf8');
      let updated = content;
      
      // Replace name
      updated = updated.split('Oktilcal').join('OptiLuxe');
      updated = updated.split('oktilcal').join('optiluxe');
      
      if (content !== updated) {
        fs.writeFileSync(dirPath, updated, 'utf8');
        console.log(`Updated branding in ${dirPath}`);
      }
    }
  }
}

console.log('Renaming brand from Oktilcal to OptiLuxe...');
processDir('C:/primecare/app/eye-4');
processDir('C:/primecare/public/eye-4');
console.log('Branding update done!');
