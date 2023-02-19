// 1、大数相加

// 2、instanceof 用于检测构造函数的原型对象是否出现在实例对象的原型链上
// 自定义 instanceof 的行为
// class PrimitiveString {
//   static [Symbol.hasInstance](x) {
//     return typeof x === 'string'
//   }
// }
// console.log('hello world' instanceof PrimitiveString) // true

// 3、隐式类型转换
// 数组 =》字符串 ：使用逗号拼接的数组元素字符串
// 数组 =》数字  ：空数组为 0，其他数组则转换第一个元素，就看第一个元素转数字的结果了
// null=》数字   ：转换为 0
// 除数组之外的引用类型 =》数字 ： NaN
// Symbol =》数字 ：报错

// 对象转原始类型
// let a = {
//   valueOf() {
//     return 0
//   },
//   toString() {
//     return '1'
//   },
//   [Symbol.toPrimitive]() { // 对象转原始类型会调用默认函数，当然也可以重写这个函数。默认转字符串就调用 toString，非字符串就调用 valueOf
//     return 2
//   }
// }
// 1 + a // => 3

// 箭头函数
