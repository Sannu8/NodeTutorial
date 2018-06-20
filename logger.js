
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);

        //Raising event
        this.emit('logging', { data: 'message', id: 1 });
    }
}


module.exports = Logger;