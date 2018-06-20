const path = require('path');

var pathObj = path.parse(__filename);

//console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

//Template String ES6 /ES2015
console.log(`Free Memory: ${freeMemory}`);