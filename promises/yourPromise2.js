class YourPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.handlers = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;

      if (value instanceof YourPromise) {
        return value.then(resolve, reject);
      }

      this.state = "fulfilled";
      this.value = value;
      this.runHandlers();
    };

    const reject = (error) => {
      if (this.state !== "pending") return;

      this.state = "rejected";
      this.value = error;
      this.runHandlers();
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  runHandlers() {
    if (this.state === "pending") return;

    this.handlers.forEach((h) => {
      if (this.state === "fulfilled") {
        if (!h.onFulfilled) {
          h.resolve(this.value);
        } else {
          try {
            const result = h.onFulfilled(this.value);
            h.resolve(result);
          } catch (err) {
            h.reject(err);
          }
        }
      }

      if (this.state === "rejected") {
        if (!h.onRejected) {
          h.reject(this.value);
        } else {
          try {
            const result = h.onRejected(this.value);
            h.resolve(result);
          } catch (err) {
            h.reject(err);
          }
        }
      }
    });

    this.handlers = [];
  }

  then(onFulfilled, onRejected) {
    return new YourPromise((resolve, reject) => {
      this.handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });

      if (this.state !== "pending") {
        this.runHandlers();
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new YourPromise((resolve) => resolve(value));
  }

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