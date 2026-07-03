const fs = require('fs');
const path = require('path');

function processDir(dirPath) {
  if (fs.lstatSync(dirPath).isDirectory()) {
    fs.readdirSync(dirPath).forEach(file => {
      processDir(path.join(dirPath, file));
    });
  } else {
    const ext = path.extname(dirPath).toLowerCase();
    if (['.tsx', '.ts', '.js', '.html'].includes(ext)) {
      let content = fs.readFileSync(dirPath, 'utf8');
      let updated = content;
      
      updated = updated.split('/eye-4/blog/single').join('#');
      updated = updated.split('/eye-4/blog').join('#');

      if (content !== updated) {
        fs.writeFileSync(dirPath, updated, 'utf8');
        console.log(`Removed blog links in ${dirPath}`);
      }
    }
  }
}

console.log('Replacing blog links with # in app/eye-4...');
processDir('C:/primecare/app/eye-4');
console.log('Done!');
