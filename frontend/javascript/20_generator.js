// function* foo(x) {
//   let y = 2 * (yield x + 1);
//   let z = yield y / 3;
//   return x + y + z;
// }
// let it = foo(5);
// console.log(it.next(56)); // => {value: 6, done: false}
// console.log(it.next(12)); // => {value: 8, done: false}
// console.log(it.next(13)); // => {value: 42, done: true}

// var a = 0;
// var b = async () => {
//   const v = await 10;
//   a = a + v;
//   console.log("2", a); // -> '2' 10
//   a = (await 10) + a;
//   console.log("3", a); // -> '3' 20
// };
// b();
// a++;
// console.log("1", a); // -> '1' 1

// 模拟一个自动执行函数
