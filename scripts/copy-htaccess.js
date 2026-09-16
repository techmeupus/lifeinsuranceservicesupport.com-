const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'public', '.htaccess');
const dest = path.join(__dirname, '..', 'out', '.htaccess');

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('✓ Successfully copied .htaccess to out/.htaccess for Hostinger deployment');
  } else {
    console.warn('⚠️ public/.htaccess not found');
  }
} catch (err) {
  console.error('Error copying .htaccess:', err);
}
