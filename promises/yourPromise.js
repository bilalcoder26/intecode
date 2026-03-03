class YourPromise {
  constructor(executor) {
    // Promise starts in pending state
    this.state = "pending";

    // Will store resolved value OR rejection reason
    this.value = undefined;

    // Array to store all .then() handlers
    // Each handler will contain:
    // { onFulfilled, onRejected, resolve, reject }
    this.handlers = [];

    // resolve function (called when promise succeeds)
    const resolve = (value) => {
      // Prevent state change if already settled
      if (this.state !== "pending") return;

      // If resolving with another YourPromise,
      // wait for that promise to resolve first (chaining behavior)
      if (value instanceof YourPromise) {
        return value.then(resolve, reject);
      }

      // Change state to fulfilled
      this.state = "fulfilled";

      // Store the success value
      this.value = value;

      // Run all stored .then() callbacks
      this.runHandlers();
    };

    // reject function (called when promise fails)
    const reject = (error) => {
      // Prevent multiple rejections
      if (this.state !== "pending") return;

      // Change state to rejected
      this.state = "rejected";

      // Store the error
      this.value = error;

      // Run all stored .catch() or onRejected callbacks
      this.runHandlers();
    };

    // Immediately execute the executor function
    // executor(resolve, reject)
    // If it throws, automatically reject promise
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // This function runs all stored handlers
  runHandlers() {
    // If still pending, do nothing
    if (this.state === "pending") return;

    // Loop through every stored handler
    this.handlers.forEach((handler) => {
      if (this.state === "fulfilled") {
        // If no success callback, pass value forward
        if (!handler.onFulfilled) {
          handler.resolve(this.value);
        } else {
          try {
            // Execute success callback
            const result = handler.onFulfilled(this.value);

            // Resolve next promise with returned value
            handler.resolve(result);
          } catch (err) {
            // If callback throws error → reject next promise
            handler.reject(err);
          }
        }
      }

      if (this.state === "rejected") {
        // If no failure callback, pass error forward
        if (!handler.onRejected) {
          handler.reject(this.value);
        } else {
          try {
            // Execute error callback
            const result = handler.onRejected(this.value);

            // If error handler returns something,
            // it resolves next promise
            handler.resolve(result);
          } catch (err) {
            handler.reject(err);
          }
        }
      }
    });

    // Clear handlers after execution
    this.handlers = [];
  }

  // .then() method
  then(onFulfilled, onRejected) {
    // Return a NEW promise (this enables chaining)
    return new YourPromise((resolve, reject) => {
      // Store callbacks + next promise's resolve/reject
      this.handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });

      // If promise already settled,
      // run handlers immediately
      if (this.state !== "pending") {
        this.runHandlers();
      }
    });
  }

  // .catch() is just syntactic sugar
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  // Static resolve
  static resolve(value) {
    return new YourPromise((resolve) => resolve(value));
  }

  // Static reject
  static reject(error) {
    return new YourPromise((_, reject) => reject(error));
  }
}

const p = new YourPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
p.then((val) => {
  console.log("first :", val);
  return val * 2;
})
  .then((val) => {
    console.log("second :", val);
    return YourPromise.resolve(val + 5);
  })
  .then((val) => {
    console.log("Third :", val);
    throw new Error("something went wrong");
  })
  .catch((err) => {
    console.error("caught error :", err.message);
  });
