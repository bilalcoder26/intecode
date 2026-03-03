console.log("A: sTART");
process.nextTick(() => console.log("B: Next Tick"));
Promise.resolve().then(() => console.log("C: promise microtask"));

setImmediate(() => console.log("D:setImmediate"));
setTimeout(() => console.log("E:setTimeout 0"),0);
console.log("F:end")


/*
A: sTART
F:end
B: Next Tick
C: promise microtask
D:setImmediate
E:setTimeout 0
*/