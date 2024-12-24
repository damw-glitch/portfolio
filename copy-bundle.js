const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'dist', 'bundle.js');
const dest = path.join(__dirname, 'bundle.js');

fs.copyFileSync(src, dest);
console.log('bundle.js copied to root directory');
