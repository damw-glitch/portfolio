const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'index.html');
const dest = path.join(__dirname, 'dist', 'index.html');

fs.copyFileSync(src, dest);
console.log('index.html copied to dist directory');
