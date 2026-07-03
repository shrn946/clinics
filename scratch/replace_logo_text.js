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
      
      // Replace target 1 (Main Header logos)
      updated = updated.split('<a href="/eye-4"><img src="/eye-4/assets/images/resources/logo.png" alt="Awesome Logo" title=""></a>')
                       .join('<a href="/eye-4"><img src="/eye-4/assets/images/resources/logo.png" alt="Logo" style="max-height: 45px; width: auto; object-fit: contain; border-radius: 6px;"><span class="logo-text">Opti<span>Luxe</span></span></a>');
      
      // Replace target 2 (Mobile Menu logo)
      updated = updated.split('<a href="/eye-4"><img src="/eye-4/assets/images/resources/mobilemenu-logo.png" alt="" title=""></a>')
                       .join('<a href="/eye-4" style="display: flex; align-items: center; gap: 8px;"><img src="/eye-4/assets/images/resources/logo.png" alt="Logo" style="max-height: 35px; width: auto; object-fit: contain; border-radius: 4px;"><span class="logo-text" style="font-size: 20px;">Opti<span>Luxe</span></span></a>');
      
      // Replace target 3 (Sticky Header logo)
      updated = updated.split('<a href="/eye-4" class="img-responsive"><img src="/eye-4/assets/images/resources/logo.png" alt="" title=""></a>')
                       .join('<a href="/eye-4" class="img-responsive"><img src="/eye-4/assets/images/resources/logo.png" alt="Logo" style="max-height: 40px; width: auto; object-fit: contain; border-radius: 4px;"><span class="logo-text" style="font-size: 22px;">Opti<span>Luxe</span></span></a>');
                       
      // Replace target 4 (Footer Logo)
      updated = updated.split('<a href="/eye-4"><img src="/eye-4/assets/images/footer/footer-logo.png" alt="Awesome Footer Logo" title="Logo"></a>')
                       .join('<a href="/eye-4" style="display: flex; align-items: center; gap: 12px; text-decoration: none;"><img src="/eye-4/assets/images/resources/logo.png" alt="Logo" style="max-height: 45px; width: auto; object-fit: contain; border-radius: 6px;"><span class="logo-text">Opti<span>Luxe</span></span></a>');

      if (content !== updated) {
        fs.writeFileSync(dirPath, updated, 'utf8');
        console.log(`Replaced logo markup in ${dirPath}`);
      }
    }
  }
}

console.log('Replacing logo markup in app/eye-4...');
processDir('C:/primecare/app/eye-4');
console.log('Replacement complete!');
