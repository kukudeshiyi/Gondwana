// add(1)(2)(3)，实现 add 函数
// 函数 curry

// 参数固定版
function curry(fn, ...args) {
  const length = fn.length;
  return function () {
    const allArgs = [...args, ...arguments];
    if (allArgs.length < length) {
      return curry(fn, ...allArgs);
    } else {
      return fn.apply(this, allArgs);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}
const testAdd = curry(add);
console.log("one", testAdd(1)(2)(3));

// 参数不固定版
function curry1(fn, ...args) {
  return function () {
    if (!arguments.length) {
      return fn.apply(this, args);
    }
    return curry1(fn, ...args, ...arguments);
  };
}

function add1(...args) {
  return args.reduce((sum, item) => {
    return sum + item;
  }, 0);
}

const testAdd1 = curry1(add1);
console.log("two", testAdd1(1)(2)(3)(4)());
