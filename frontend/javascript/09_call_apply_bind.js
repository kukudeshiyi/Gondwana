// call
function myCall(func, that, ...params) {
  if (typeof that === "object") {
    that.func = func;
    return that.func(...params);
  }
}

Function.prototype.call2 = function (context, ...params) {
  if (typeof this !== "function") {
    console.log("type error");
  }
  context = context || window;
  const sym = Symbol();
  context[sym] = this;
  const result = context[sym](...params);
  delete context[sym];
  return result;
};

// apply
function myApply() {}

Function.prototype.apply2 = function (context, params) {
  if (typeof this !== "function") {
    console.log("type error");
  }
  context = context || window;
  params = params || [];
  const sym = Symbol();
  context[sym] = this;
  const result = context[sym](...params);
  delete context[sym];
  return result;
};

// bind
function myBind(func, that, ...params) {
  return function () {
    if (typeof that === "object") {
      that.func = func;
      return that.func(...params);
    }
  };
}

Function.prototype.bind2 = function (context, ...params) {
  let that = this;
  return function fn() {
    if (typeof that !== "function") {
      console.log("type error");
    }
    if (this instanceof fn) {
      return new that(...params, ...arguments);
    }
    context = context || window;
    const sym = Symbol();
    context[sym] = that;
    const result = context[sym](...params);
    delete context[sym];
    return result;
  };
};

// 测试 call apply bind
// 注意箭头函数的使用，务必要尽量不使用箭头函数
function Test(params) {
  console.log("value", this.name, params);
}

const a = {
  name: "run",
};

Test();
Test.call2(a, "li");
Test.apply2(a, ["li"]);
const c = Test.bind2(a, "li");
c();
