
const fs = require('fs');

//Synchronous method
const filesarray = fs.readdirSync('./');
console.log(filesarray);

//Asynchronous method or the preferred method
fs.readdir('./', (err, filesarray) => {
    if (err) {
        console.log('There is an error: ', err);
    }
    else { console.log('Result: ', filesarray) }
});