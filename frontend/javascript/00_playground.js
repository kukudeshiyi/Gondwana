// function twoSum(nums, target) {
//   const len = nums.length;
//   const map = new Map();
//   for(let i = 0; i < len; i++){
//     const difference = target - nums[i];
//     const targetIndex = map.get(difference);
//     if(typeof targetIndex === "number"){
//       return [targetIndex, i];
//     }
//     map.set(nums[i], i);
//   }
// }

// function merge(nums1, m, nums2, n) {
//   let i = m - 1,
//     j = n - 1,
//     k = m + n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] >= nums2[j]) {
//       nums1[k] = nums1[i];
//       k--;
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       k--;
//       j--;
//     }
//   }

//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     k--;
//     j--;
//   }
// }

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 先排序
// 遍历，每遍历一个元素，就用双指针指向开头结束，通过sum的大小判断该移动哪个指针
// 去重，因为排序了，所以去重思路转换为对每个元素单独去重就可以了
// function threeSum(nums) {
//   nums.sort((a, b) => a - b);
//   const len = nums.length;
//   const res = [];

//   for (let i = 0; i < len; i++) {
//     if (nums[i] === nums[i - 1]) {
//       continue;
//     }

//     let m = i + 1,
//       n = len - 1;
//     while (m < n) {
//       const sum = nums[i] + nums[m] + nums[n];
//       if (sum > 0) {
//         n--;
//       } else if (sum < 0) {
//         m++;
//       } else {
//         res.push([nums[i], nums[m], nums[n]]);
//         while (m < n && nums[m] === nums[m + 1]) m++;
//         while (m < n && nums[n] === nums[n - 1]) n--;
//         m++;
//         n--;
//       }
//     }
//   }

//   return res;
// }

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// function isPalindrome(str) {
//   return (str = reverseStr(str));
// }

// function isPalindrome1(str) {
//   const len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// function validPalindrome(s) {
//   const len = s.length;
//   let i = 0,
//     j = len - 1;

//   while (i < j && s[i] === s[j]) {
//     i++;
//     j--;
//   }

//   if (isPalindrome(i + 1, j) || isPalindrome(i, j - 1)) {
//     return true;
//   }

//   function isPalindrome(start, end) {
//     while (start < end) {
//       if (s[start] !== s[end]) {
//         return false;
//       }
//       start++;
//       end--;
//     }
//     return true;
//   }

//   return false;
// }

// function isPalindrome2(s) {
//   const newStr = s.toUpperCase();
//   let i = 0,
//     j = s.length - 1;
//   const regex = /[A-Z0-9]{1}/;
//   while (i < j) {
//     if (!regex.test(newStr[i])) {
//       i++;
//       continue;
//     }
//     if (!regex.test(newStr[j])) {
//       j--;
//       continue;
//     }
//     if (newStr[i] !== newStr[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }

// console.log(typeof 2); // number
// console.log(typeof true); // boolean
// console.log(typeof "str"); // string
// console.log(typeof []); // object     []数组的数据类型在 typeof 中被解释为 object
// console.log(typeof function () {}); // function
// console.log(typeof {}); // object
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object special
// console.log(typeof new String("123")); // object
// console.log(typeof Symbol("123")); // symbol
// console.log(typeof BigInt(123)); // bigint

// console.log(1n === 1); // false
// console.log(1n == 1); // true
// console.log(1n < 2); // true

// const a = BigInt(123);

// let b = a;

// b = 234n;
// console.log(a, b, Object(b)); // 123n 234n

// console.log(2 instanceof Number); // false
// console.log(true instanceof Boolean); // false
// console.log("str" instanceof String); // false
// console.log([] instanceof Array); // true
// console.log(function () {} instanceof Function); // true
// console.log({} instanceof Object); // true
// Undefined 和 Null 根本就不存在
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);

// const o = {
//   a: 1,
//   b: 2,
//   // __proto__ 设置了 [[Prototype]]。在这里它被指定为另一个对象字面量。
//   __proto__: {
//     b: 3,
//     c: 4,
//   },
// };

// // o.[[Prototype]] 具有属性 b 和 c。
// // o.[[Prototype]].[[Prototype]] 是 Object.prototype（我们会在下文解释其含义）。
// // 最后，o.[[Prototype]].[[Prototype]].[[Prototype]] 是 null。
// // 这是原型链的末尾，
// // 因为根据定义，null 没有 [[Prototype]]。
// // 因此，完整的原型链看起来像这样：
// // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

// console.log(o.a); // 1
// // o 上有自有属性“a”吗？有，且其值为 1。

// console.log(o.b); // 2
// // o 上有自有属性“b”吗？有，且其值为 2。
// // 原型也有“b”属性，但其没有被访问。
// // 这被称为属性遮蔽（Property Shadowing）

// console.log(o.c); // 4
// // o 上有自有属性“c”吗？没有，检查其原型。
// // o.[[Prototype]] 上有自有属性“c”吗？有，其值为 4。

// console.log(o.d); // undefined
// // o 上有自有属性“d”吗？没有，检查其原型。
// // o.[[Prototype]] 上有自有属性“d”吗？没有，检查其原型。
// // o.[[Prototype]].[[Prototype]] 是 Object.prototype 且
// // 其默认没有“d”属性，检查其原型。
// // o.[[Prototype]].[[Prototype]].[[Prototype]] 为 null，停止搜索，
// // 未找到该属性，返回 undefined。

// function _instanceof(instance, constructor) {
//   if (
//     (typeof instance !== "object" || instance === null) &&
//     typeof instance !== "function"
//   ) {
//     return false;
//   }

//   const constructorPrototype = constructor.prototype;
//   let instancePrototype = Object.getPrototypeOf(instance);

//   while (instancePrototype) {
//     if (instancePrototype === constructorPrototype) {
//       return true;
//     }
//     instancePrototype = Object.getPrototypeOf(instancePrototype);
//   }

//   return false;
// }

// console.log(_instanceof(2, Number)); // false
// console.log(_instanceof(true, Boolean)); // false
// console.log(_instanceof("str", String)); // false
// console.log(_instanceof([], Array)); // true
// console.log(_instanceof(function () {}, Function)); // true
// console.log(_instanceof({}, Object)); // true

// function getType(obj) {
//   let type = typeof obj;
//   if (type !== "object") {
//     return type;
//   }

//   return Object.prototype.toString
//     .call(obj)
//     .replace(/^\[object\s{1}(\w+)\]$/, "$1");
// }

// console.log(getType(new Date()));

// 借用函数
// var arrayLike = {
//   0: "java",
//   1: "script",
//   length: 2,
// };
// Array.prototype.push.call(arrayLike, "jack", "lily");
// console.log(typeof arrayLike); // 'object'
// console.log(arrayLike);

// let arr = [13, 6, 10, 11, 16];
// const max = Math.max.apply(Math, arr);
// const min = Math.min.apply(Math, arr);

// console.log(max); // 16
// console.log(min); // 6

// version1: 使用箭头函数，好处是 this 自动绑定外层作用域函数，而且返回的函数不能 new，也就不用处理 new
// Function.prototype.myBind = function (context, ...preParams) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   return (...params) => {
//     return this.apply(context, [...preParams, ...params]);
//   };
// };

// version2: 使用普通函数，所以要自己处理 this，处理 new
// Function.prototype.myBind = function (context, ...preParams) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let self = this;
//   return function fn(...params) {
//     if (this instanceof fn) {
//       return new self(...preParams, ...params);
//     }
//     return self.apply(context ?? window, [...preParams, ...params]);
//   };
// };

// version 3: 不使用 apply
// Function.prototype.myBind = function (context, ...preParams) {
//   if (typeof fn !== "function") {
//     console.error("type error");
//   }
//   const self = this;
//   return function fn(...params) {
//     if (this instanceof fn) {
//       return new self(...preParams, ...params);
//     }
//     context = context ?? window;
//     const symKey = Symbol("bindFn");
//     context[symKey] = self;
//     const res = context[symKey](...[...preParams, ...params]);
//     delete context[symKey];
//     return res;
//   };
// };

// Function.prototype.myCall = function (context, ...params) {
//   if (typeof this !== "function") {
//     throw new Error("type error");
//   }
//   context = context ? Object(context) : window;
//   const symKey = Symbol("myCall");
//   context[symKey] = this;
//   const res = context[symKey](...params);
//   delete context[symKey];
//   return res;
// };

// Function.prototype.myApply = function (context, params) {
//   if (typeof this !== "function") {
//     throw new Error("type error");
//   }
//   context = context ? Object(context) : window;
//   const symKey = Symbol("myCall");
//   context[symKey] = this;
//   const res = context[symKey](...(params || []));
//   delete context[symKey];
//   return res;
// };

// const a = {
//   name: "you good",
// };

// function Test(...params) {
//   console.log(this.name, params);
// }

// const fn = Test.myBind(a, 1, 6);
// fn(2, 3);
// const c = new fn();

// const fn1 = Test.myApply(a, [1, 3, 4]);

// "use strict";

// var foo = 1;
// (function foo() {
//   foo = 10;
//   console.log("fn", foo);
// })();
// console.log(foo);

// var foo = 1;

// (function () {
//   // 匿名，没有内部名称
//   foo = 10; // ✅ 修改外层的 foo
//   console.log("fn", foo); // 10
// })();

// console.log(foo); // 10
