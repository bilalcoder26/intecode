const {EventEmitter} = require('events');

const bus = EventEmitter();

//helpful : cap listner to avoid leak warning in dev

bus.setMaxListner(50);