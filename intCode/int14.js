//Appeniented company

const promise = new Promise(res => res(2));
promise.then(v => {
 console.log(v);
 return v * 2;
})
.then(v => {
 console.log(v);
 return v * 2;
})
.finally(v => {
 console.log(v);
 return v * 2;
})
.then(v => {
 console.log(v);
});

/*
const promise = new Promise(res => res(2));
promise
  .then(v => {
    console.log(v);  // Step 2: Logs `2`
    return v * 2;    // Step 3: Returns `4`
  })
  .then(v => {
    console.log(v);  // Step 4: Logs `4`
    return v * 2;    // Step 5: Returns `8`
  })
  .finally(v => {
    console.log(v);  // Step 6: Logs `undefined`
    return v * 2;    // This value is ignored
  })
  .then(v => {
    console.log(v);  // Step 7: Logs `8`
  });

  finally does not receive the resolved value (8). The v in .finally(v => ...) 
  is not the resolved value of the previous step. In this case, v is undefined.
console.log(v) logs undefined.
The return value of .finally() (v * 2) is ignored and does not affect the promise chain.
The value 8 (from the previous .then()) is passed to the next .then().
*/

/*
Key Points to Highlight:
Promise Chaining:

Each .then() returns a new Promise, and the returned value is passed to the next .then().
finally Behavior:

The .finally() block does not receive the resolved value of the previous step; instead, 
its callback is always called (whether the Promise is resolved or rejected).
The return value of .finally() is ignored, and the chain proceeds with the value 
from the previous step.
console.log Outputs:

Logs are executed sequentially based on the resolved values at each step.
*/

