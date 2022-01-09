const fs = require('fs');
fs.writeFileSync('./newFile.txt', 'Random content inside');
fs.copyFileSync('./newFile.txt', 'copyFile.txt');
fs.renameSync('./newFile.txt', './newNameFile.txt');
console.log('Files list:', fs.readdirSync('.'));
const data = fs.readFileSync('./copyFile.txt', { encoding: 'utf8', flag: 'r' });
console.log('copyFile content:', data);
