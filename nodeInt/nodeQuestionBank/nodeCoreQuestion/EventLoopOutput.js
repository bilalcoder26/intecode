console.log('1. Start');

// Timer (Timer Phase)
setTimeout(() => {
    console.log('4. Timeout (Timer Phase)');
}, 0);

// Immediate (Check Phase)
setImmediate(() => {
    console.log('5. Immediate (Check Phase)');
});

// File I/O (Poll Phase)
const fs = require('fs');
fs.readFile(__filename, () => {
    console.log('6. File I/O (Poll Phase)');
    
    // Nested within I/O
    setTimeout(() => console.log('8. Nested timeout'), 0);
    setImmediate(() => console.log('7. Nested immediate'));
});

// Promise (Microtask - special!)
Promise.resolve().then(() => {
    console.log('3. Promise (Microtask)');
});

// Next Tick (Microtask - highest priority)
process.nextTick(() => {
    console.log('2. Next Tick (Highest priority)');
});

console.log('1b. End of main code');