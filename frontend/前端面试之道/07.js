// 手写 call apply bind new instanceof
Function.prototype.call = function (context, ...params) {
  if (typeof this !== "function") {
    throw "type error";
  }
  context = context || window;
  const sym = Symbol();
  context[sym] = this;
  const res = context[sym](...params);
  delete context[sym];
  return res;
};

Function.prototype.bind = function (context, ...params) {
  if (typeof this !== "function") {
    throw "type error";
  }
  const that = this;
  return function fn() {
    if (this instanceof fn) {
      return new that(...params, ...arguments);
    }
    const result = _that.call(context, ...params);
    return result;
  };
};

function MyNew(fn, ...params) {
  const tempObj = Object.create(fn.prototype);
  const res = fn.call(tempObj, ...params);
  return res instanceof fn ? res : tempObj;
}

function myInstanceof(obj, fn) {
  let prototype = obj.__proto__;
  const target = fn.prototype;
  while (prototype) {
    if (prototype === target) {
      return true;
    }
    prototype = prototype.__proto__;
  }
  return false;
}

// 浏览器垃圾回收算法
