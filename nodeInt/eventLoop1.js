setTimeout(()=> console.log("A: timeout (timer)"),0);
setImmediate(()=> console.log("B: Immediate (check"));

Promise.resolve().then(()=> {console.log("C : promise microtask")});
process.nextTick(() => console.log("D: nextTick microtask"));

require("fs").readFile(__filename,()=> {
    console.log("E: I/O CALLBACK (poll)");
    setTimeout(() => console.log("F: TIMEOUT IN I/O (TIMER)"));
    setImmediate(() => console.log("G: immediate in I/O (CHECK)"));
})

/*
D: nextTick microtask
C : promise microtask
A: timeout (timer)
B: Immediate (check
E: I/O CALLBACK (poll)
G: immediate in I/O (CHECK)
F: TIMEOUT IN I/O (TIMER)
*/

//------------------------
/*
🔁 Node.js Event Loop Phases (Simplified Order)

Timers → setTimeout, setInterval

Pending Callbacks

Idle, Prepare

Poll → I/O callbacks (fs.readFile)

Check → setImmediate

**Close Callbacks`

And after every phase, Node executes:

process.nextTick() queue (first priority)

Promise microtask queue (second priority)
*/

/*
1️⃣ Synchronous code
2️⃣ process.nextTick()
3️⃣ Promise microtasks
4️⃣ Timers (setTimeout)
5️⃣ I/O callbacks
6️⃣ setImmediate()
7️⃣ Close callbacks
*/

/*
🎯 Golden Interview Rules

nextTick always beats Promise.

Microtasks finish completely before event loop continues.

Inside I/O → setImmediate beats setTimeout.

setTimeout(0) is never truly immediate.

Node has phases — browser does not.
*/
