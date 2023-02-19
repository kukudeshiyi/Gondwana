// 创建一个新对象
// 连接原型
// 绑定 this
// 返回对象
function myNew(fn, ...params) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, params);
  return result instanceof Object ? result : obj; // 如果构造函数返回了一个对象，那么就返回这个对象，否则返回构造之后的对象
}

function instanceOf(obj, fn) {
  if (typeof obj !== "object") {
    false;
  }
  const prototype = obj.__proto__;
  while (prototype) {
    if (prototype === fn.prototype) {
      return true;
    }
    prototype = prototype.__proto__;
  }
  return false;
}
