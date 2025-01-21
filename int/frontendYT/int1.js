console.log(0);
setTimeout(() => console.log(1));
new Promise((res) => {
   console.log(2);
   res(false);
})
.then(() => console.log(3))
.catch(() => console.log(4));
console.log(5);

/*
0
2
5
3
1

*/

/*
This is a synchronous operation. The value 0 is logged to the console immediately.
Output: 0

setTimeout(() => console.log(1));

setTimeout schedules a task to be executed after the current call stack is cleared. 
The callback (console.log(1)) is added to the macrotask queue. 
It will execute after the synchronous and microtasks (like .then or .catch) are complete.
No immediate output.
*/

/*
new Promise((res) => {
   console.log(2);
   res(false);
});

The new Promise constructor executes its executor function synchronously.
The console.log(2) runs immediately. Then, the res(false) resolves the promise.
Output: 2
*/

/*
.then(() => console.log(3))
.catch(() => console.log(4));
After the promise is resolved with res(false), the .then() callback is queued into the microtask queue.
The .catch() is skipped since no error occurs.
*/

/*


console.log(0);
setTimeout(() => console.log(1));
new Promise((res) => {
   console.log(2);
   res(false);
})
.then(() => console.log(3))
.catch(() => console.log(4));
console.log(5);
Execution Order and Explanation:
Step 1:
javascript
Copy code
console.log(0);
This is a synchronous operation. The value 0 is logged to the console immediately.
Output: 0
Step 2:
javascript
Copy code
setTimeout(() => console.log(1));
setTimeout schedules a task to be executed after the current call stack is cleared. 
The callback (console.log(1)) is added to the macrotask queue. 
It will execute after the synchronous and microtasks (like .then or .catch) are complete.
No immediate output.
Step 3:
javascript
Copy code
new Promise((res) => {
   console.log(2);
   res(false);
});
The new Promise constructor executes its executor function synchronously.
The console.log(2) runs immediately. Then, the res(false) resolves the promise.
Output: 2
Step 4:
javascript
Copy code
.then(() => console.log(3))
.catch(() => console.log(4));
After the promise is resolved with res(false), the .then() callback is queued into 
the microtask queue.
The .catch() is skipped since no error occurs.
No immediate output.

Step 5:
javascript
Copy code
console.log(5);
This is a synchronous operation. The value 5 is logged immediately.
Output: 5
Handling Queues:
Step 6: Microtasks
Microtasks (like .then) are executed before macrotasks.
The .then(() => console.log(3)) runs next.
Output: 3
Step 7: Macrotasks
After the microtasks are cleared, the macrotasks (like setTimeout) are executed.
The callback console.log(1) runs.
Output: 1

*/

/*
Why This Order?
Synchronous Code executes first, in the order it appears.
Microtasks (e.g., .then, .catch) from promises are handled after the synchronous code
 but before macrotasks.
Macrotasks (e.g., setTimeout) execute after microtasks are cleared.
*/
