//Appeniented company

console.log('1')
setTimeout(() => console.log('2'))
new Promise(() =>console.log('3'))
console.log('4')

/*

console.log('1'):
console.log is a synchronous function, so it is executed immediately.
Output: 1.
2. setTimeout(() => console.log('2')):
setTimeout is an asynchronous function.
The callback function (() => console.log('2')) is registered to execute after the specified 
delay (default 0 ms).
This callback is added to the macrotask queue and will execute later, 
after the current stack and microtasks are cleared.
3. new Promise(() => console.log('3')):
A Promise constructor executes its executor function synchronously.
The console.log('3') inside the executor is executed immediately.
Note: This promise has no .then() or .catch() attached, so no further microtasks are created.
Output: 3.
4. console.log('4'):
Another synchronous console.log is executed immediately.
Output: 4.
5. Event Loop:
At this point, the call stack is empty, so the event loop processes tasks in the 
microtask queue first (if any), followed by the macrotask queue.
There are no microtasks in this code, so the event loop moves to the macrotask queue.
The setTimeout callback (() => console.log('2')) is taken from the macrotask queue and executed.
Output: 2.

*/