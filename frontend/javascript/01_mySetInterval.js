// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，
// 然后写一个 myClear，停止上面的 mySetInterVal

// 反思
// 面向对象或者函数式编程方式，写代码的时候可以思考两者是否有什么区别或者其中一个在当前场景下是否有优势
// 另外，注意 this 问题，当用户把你一个函数交给你的函数执行，结果里面用到了 this，但是指向已经不对了，其实也是不好的。

function mySetInterVal(fn, a, b) {
  let count = 0;
  let timer;
  createSetTimeout();
  return myClear;
  function createSetTimeout() {
    console.log("TIME", Date.now());
    timer = setTimeout(() => {
      fn();
      count++;
      createSetTimeout();
    }, a + count * b);
  }
  function myClear() {
    timer && clearTimeout(timer);
  }
}

const myClear = mySetInterVal(
  () => {
    console.log("done");
  },
  0,
  1000
);

setTimeout(() => {
  myClear();
}, 4000);

function mySetInterVal(callback, wait) {
  let timer;
  function fn() {
    callback();
    timer = setTimeout(fn, wait);
  }
  setTimeout(fn, wait);
  return function () {
    timer && clearTimeout(timer);
  };
}
