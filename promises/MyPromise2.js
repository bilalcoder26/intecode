const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #value = undefined;
  #state = STATE.PENDING;
  #thencbs = [];
  #catchcbs = [];

  constructor(callback) {
    try {
      callback(this.#onSuccess, this.#onFail);
    } catch (error) {
      this.#onFail(error);
    }
  }

  #runCallbacks = () => {
    queueMicrotask(() => {
      if (this.#state === STATE.FULFILLED) {
        this.#thencbs.forEach((cb) => {
          cb(this.#value);
        });
        this.#thencbs = [];
      }

      if (this.#state === STATE.REJECTED) {
        this.#catchcbs.forEach((cb) => {
          cb(this.#value);
        });
        this.#catchcbs = [];
      }
    });
  };

  #onSuccess = (value) => {
    if (this.#state !== STATE.PENDING) return;

    // Handle returned promises
    if (value instanceof MyPromise) {
      value.then(this.#onSuccess, this.#onFail);
      return;
    }

    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  };

  #onFail = (value) => {
    if (this.#state !== STATE.PENDING) return;

    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  };

  then = (thenCb, catchCb) => {
    return new MyPromise((resolve, reject) => {
      this.#thencbs.push((value) => {
        if (thenCb == null) {
          resolve(value);
          return;
        }

        try {
          const result = thenCb(value);

          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      });

      this.#catchcbs.push((value) => {
        if (catchCb == null) {
          reject(value);
          return;
        }

        try {
          const result = catchCb(value);

          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      });

      this.#runCallbacks();
    });
  };

  catch(cb) {
    return this.then(undefined, cb);
  }

  static resolve = (data) => {
    return new MyPromise((resolve) => {
      resolve(data);
    });
  };

  static reject = (err) => {
    return new MyPromise((_, reject) => {
      reject(err);
    });
  };
}
const p = new MyPromise((resolve) => {
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
    return MyPromise.resolve(val + 5);
  })
  .then((val) => {
    console.log("third :", val);
    throw new Error("something went wrong");
  })
  .catch((err) => {
    console.log("caught error :", err.message);
  });