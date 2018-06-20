
const fs = require('fs');
/*
const filesarray = fs.readdirSync('./');
console.log(files); */

fs.readdir('$', (err, filesarray) => {
    if (err) {
        // console.log('There is an error: ', err);
    }
    //else { console.log('Result: ', filesarray) }
});

//Register a listener
//emitter.on('messageLogged', (e) => { console.log('Listener called', e) })

//Signalling that an event has occured. RAISING AN EVENT
//emitter.emit('messageLogged', { id: 1, url: 'https://' });

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Registering listerner
logger.on('logging', (e) => {
    console.log('Listener Called', e);
});

logger.log('message');