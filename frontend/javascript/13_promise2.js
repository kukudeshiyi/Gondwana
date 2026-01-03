const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(
      new TypeError(
        `TypeError: Chaining cycle detected for promise #<MyPromise> `
      )
    );
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

class MyPromise {
  constructor(executor) {
    this.value = undefined;
    this.reason = undefined;
    this.status = PENDING;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      // 这里我们添加一个规范外的逻辑 让value值是promise的话可以进行一个解析
      if (value instanceof MyPromise) {
        // 递归解析值
        return value.then(resolve, reject);
      }
      if (this.status !== PENDING) return;
      this.status = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((cb) => cb(this.value));
    };

    const reject = (reason) => {
      if (this.status !== PENDING) return;
      this.status = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((cb) => cb(this.reason));
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
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
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(p, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === REJECTED) {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(p, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(p, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(p, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
    return p;
  }

  catch(errCallback) {
    return this.then(null, errCallback);
  }

  finally(finallyCallback) {
    return this.then(
      (data) => {
        MyPromise.resolve(finallyCallback()).then(() => data);
      },
      (err) => {
        return MyPromise.resolve(finallyCallback()).then(() => {
          throw err;
        });
      }
    );
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value);
    });
  }

  static all = function (promises) {
    let result = [];
    let times = 0;
    return new MyPromise((resolve, reject) => {
      function processResult(data, index) {
        result[index] = data; // 映射结果
        if (++times == promises.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < promises.length; i++) {
        let promise = promises[i];
        MyPromise.resolve(promise).then((data) => {
          processResult(data, i);
        }, reject);
      }
    });
  };

  static race = function (promises) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        let promise = promises[i];
        MyPromise.resolve(promise).then(resolve, reject);
      }
    });
  };

  static allSettled = function (promises) {
    let result = [];
    let times = 0;
    return new MyPromise((resolve, reject) => {
      function processResult(data, index, status) {
        result[index] = { status, value: data };
        if (++times == promises.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < promises.length; i++) {
        let promise = promises[i];
        MyPromise.resolve(promise).then(
          (data) => {
            processResult(data, i, "fulfilled");
          },
          (err) => {
            processResult(err, i, "rejected");
          }
        );
      }
    });
  };
}

MyPromise.deferred = function () {
  const dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = MyPromise;
