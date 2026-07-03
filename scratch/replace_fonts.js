const fs = require('fs');

const filePath = 'C:/primecare/public/eye-4/assets/css/style.css';

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Replace Google Font import at the top
  content = content.replace(/@import url\('https:\/\/fonts.googleapis.com\/css2\?family=Playfair\+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap'\);/g, 
    `@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');`);
  
  // 2. Replace Inter and Poppins with Outfit
  content = content.split("'Inter', sans-serif").join("'Outfit', sans-serif");
  content = content.split("'Poppins', sans-serif").join("'Outfit', sans-serif");
  content = content.split('"Poppins",sans-serif').join("'Outfit', sans-serif");
  
  // 3. Make sure global headings (h1, h2, h3, h4, h5, h6) use Lora serif font
  // Line 90: h1, h2, h3, h4, h5, h6 { ... font-family: 'Outfit', sans-serif; ... }
  // Let's replace the heading font specifically
  content = content.replace(/(h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{[^}]*font-family:\s*)'Outfit',\s*sans-serif/i, `$1'Lora', serif`);
  
  // 4. Overwrite Playfair Display in hero heading style.css to Lora
  content = content.split("'Playfair Display', serif").join("'Lora', serif");
  content = content.split("'Plus Jakarta Sans', 'Poppins', sans-serif").join("'Outfit', sans-serif");
  content = content.split("'Plus Jakarta Sans', sans-serif").join("'Outfit', sans-serif");
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated fonts in style.css to Lora & Outfit!');
} else {
  console.error('style.css not found!');
}
