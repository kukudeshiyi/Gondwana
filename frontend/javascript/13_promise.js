// const p = new Promise((res, rej) => {
//   rej("100");
// });

// p.then((val) => {
//   console.log("fulfilled1", val);
// })
//   .then(undefined, (reason) => {
//     console.log("rejected1", reason);
//     return Promise.reject("456");
//   })
//   .catch((reason) => {
//     console.log("catch", reason);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// p.then(undefined, (reason) => {
//   console.log("rejected2", reason);
// });

const MY_PROMISE_STATUS = {
  PENDING: "pending",
  FULFILLMENT: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(executor) {
    this.status = MY_PROMISE_STATUS.PENDING;
    this.value;
    this.reason;
    this.fulfillmentCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (val) => {
      if (this.status !== MY_PROMISE_STATUS.PENDING) return;
      this.status = MY_PROMISE_STATUS.FULFILLMENT;
      this.value = val;
      this.fulfillmentCallbacks.forEach((cb) => cb(this.value));
    };

    const reject = (reason) => {
      if (this.status !== MY_PROMISE_STATUS.PENDING) return;
      this.status = MY_PROMISE_STATUS.REJECTED;
      this.reason = reason;
      this.rejectedCallbacks.forEach((cb) => cb(this.reason));
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  static resolve(value) {
    return new MyPromise((res) => {
      res(value);
    });
  }

  static reject(value) {
    return new MyPromise((_res, rej) => {
      rej(value);
    });
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      promises = Array.from(promises);
      const len = promises.length;
      const result = [];
      let count = 0;
      if (len <= 0) {
        resolve([]);
      }
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (data) => {
            result[index] = data;
            count++;
            if (count >= len) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      promises = Array.from(promises);
      const len = promises.length;
      const result = [];
      let count = 0;
      if (len <= 0) {
        reject(new AggregateError(result, "all promised were rejected"));
      }
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (data) => {
            resolve(data);
          },
          (err) => {
            result[index] = err;
            count++;
            if (count >= len) {
              reject(new AggregateError(result, "all promised were rejected"));
            }
          }
        );
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises = Array.from(promises);
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }

  static allSettled(promises) {
    return new MyPromise((resolve) => {
      promises = Array.from(promises);
      const len = promises.length;
      const result = [];
      let count = 0;
      if (len <= 0) {
        resolve([]);
      }
      function processResult(status, index, data) {
        result[index] =
          status === MY_PROMISE_STATUS.FULFILLMENT
            ? {
                status,
                value: data,
              }
            : {
                status,
                reason: data,
              };
        count++;
        if (count >= len) {
          resolve(result);
        }
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (data) => {
            processResult(MY_PROMISE_STATUS.FULFILLMENT, index, data);
          },
          (err) => {
            processResult(MY_PROMISE_STATUS.REJECTED, index, err);
          }
        );
      });
    });
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (e) => {
            throw e;
          };

    const p = new MyPromise((resolve, reject) => {
      if (this.status === MY_PROMISE_STATUS.PENDING) {
        this.fulfillmentCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const res = onFulfilled(this.value);
              resolvePromise(p, res, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.rejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const res = onRejected(this.reason);
              resolvePromise(p, res, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }

      if (this.status === MY_PROMISE_STATUS.FULFILLMENT) {
        queueMicrotask(() => {
          try {
            const res = onFulfilled(this.value);
            resolvePromise(p, res, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }

      if (this.status === MY_PROMISE_STATUS.REJECTED) {
        queueMicrotask(() => {
          try {
            const res = onRejected(this.reason);
            resolvePromise(p, res, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });

    return p;
  }

  catch(callback) {
    return this.then(null, callback);
  }

  finally(callback) {
    return this.then(
      (data) => {
        return MyPromise.resolve(callback()).then(() => data);
      },
      (err) => {
        return MyPromise.resolve(callback()).then(() => {
          throw err;
        });
      }
    );
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError("detect chain circle invocation"));
  }

  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    let called = false;
    try {
      const then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (v) => {
            if (called) return;
            called = true;
            resolvePromise(promise, v, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = MyPromise;
