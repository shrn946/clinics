const fs = require('fs');

const src = 'C:/primecare/public/eye-4/assets/images/resources/logo.png';
const dest = 'C:/primecare/public/eye-4/assets/images/resources/favicon.png';

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied logo to favicon!');
} catch (err) {
  console.error('Failed to copy logo to favicon:', err);
}
