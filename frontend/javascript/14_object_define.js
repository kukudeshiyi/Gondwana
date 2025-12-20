/***
 * Object.defineProperty 有数据描述符和访问描述符两种
 * 数据描述符包括 value、writable、enumerable、configurable
 * 访问描述符包括 get、set、enumerable、configurable
 * 1. 数据描述符和访问描述符不能同时存在
 */

// 数据描述符和访问描述符不能同时存在
const obj = {
  // name: 'Alice',
};

Object.defineProperty(obj, 'nam', {
  // value: 'Alice',
  // writable: true,
  enumerable: false,
  configurable: true,
  get: function () {
    return this.name + "123";
  },
  set: function (value) {
    this.name = value + "456";
  }
});

obj.nam = 'Bob';

console.log(obj.name, obj.nam);

for (let key in obj) {
  console.log(key);
}


// test if can set writable back to true when configurable is false
// const obj = {};
// Object.defineProperty(obj, 'prop', {
//   value: 100,
//   writable: true,
//   configurable: false
// });

// // 可以修改值（writable: true）
// obj.prop = 200;

// console.log("before modification", obj.prop);

// // 可以把 writable 改为 false
// Object.defineProperty(obj, 'prop', {
//   writable: false
// });

// obj.prop = 300;

// console.log("after modification", obj.prop);

// 但不能再改回 true
// Object.defineProperty(obj, 'prop', {
//   writable: true // TypeError!
// });