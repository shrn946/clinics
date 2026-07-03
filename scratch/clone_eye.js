const fs = require('fs');
const path = require('path');

function copyFolderRecursiveSync(source, target) {
  var files = [];

  // Check if folder needs to be created or clean
  var targetFolder = target;
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      var curTarget = path.join(targetFolder, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        fs.copyFileSync(curSource, curTarget);
      }
    });
  }
}

function replaceInFileSync(filePath, findStr, replaceStr) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = content.split(findStr).join(replaceStr);
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated references in ${filePath}`);
  }
}

function processDirectoryRecursive(dirPath, findStr, replaceStr) {
  if (fs.lstatSync(dirPath).isDirectory()) {
    fs.readdirSync(dirPath).forEach(file => {
      processDirectoryRecursive(path.join(dirPath, file), findStr, replaceStr);
    });
  } else {
    // Process text files
    const ext = path.extname(dirPath).toLowerCase();
    if (['.tsx', '.ts', '.js', '.css', '.html', '.json'].includes(ext)) {
      replaceInFileSync(dirPath, findStr, replaceStr);
    }
  }
}

console.log('Cloning app/eye-1 to app/eye-4...');
copyFolderRecursiveSync('C:/primecare/app/eye-1', 'C:/primecare/app/eye-4');

console.log('Cloning public/eye-1 to public/eye-4...');
copyFolderRecursiveSync('C:/primecare/public/eye-1', 'C:/primecare/public/eye-4');

console.log('Replacing references in app/eye-4...');
processDirectoryRecursive('C:/primecare/app/eye-4', '/eye-1', '/eye-4');
processDirectoryRecursive('C:/primecare/app/eye-4', 'eye-1', 'eye-4');

console.log('Replacing references in public/eye-4...');
processDirectoryRecursive('C:/primecare/public/eye-4', '/eye-1', '/eye-4');
processDirectoryRecursive('C:/primecare/public/eye-4', 'eye-1', 'eye-4');

console.log('Done cloning and replacing!');
