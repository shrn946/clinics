const fs = require('fs');

const srcPath = 'C:/Users/Hassan/.gemini/antigravity-cli/brain/535b2d71-ed45-48e2-bcc6-fb47990805a5/optiluxe_logo_1782878167934.jpg';
const destPaths = [
  'C:/primecare/public/eye-4/assets/images/resources/logo.png',
  'C:/primecare/public/eye-4/assets/images/resources/mobilemenu-logo.png',
  'C:/primecare/public/eye-4/assets/images/footer/footer-logo.png'
];

destPaths.forEach(dest => {
  try {
    fs.copyFileSync(srcPath, dest);
    console.log(`Successfully copied logo to ${dest}`);
  } catch (err) {
    console.error(`Failed to copy to ${dest}:`, err);
  }
});
