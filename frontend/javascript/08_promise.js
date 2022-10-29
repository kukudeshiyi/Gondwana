// example
const a = new Promise((res, rej) => {
  res(a);
});
a.then(
  (value) => {
    // success
  },
  (reason) => {
    // failed
  }
)
  .catch(() => {})
  .finally(() => {});

//  实现一个符合 promise A+ 规范的 promise
