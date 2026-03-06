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

function myFetch(sec) {
  return new Promise((res) => {
    setTimeout(() => {
      res(sec);
    }, sec);
  });
}

function* fetchBusinessData() {
  const value1 = yield myFetch(1000);
  console.log("1");
  const value2 = yield myFetch(3000);
  console.log("2");
  const value3 = yield myFetch(4000);
  console.log("values:", value1, value2, value3);
}

function autoFn(fn) {
  const iterator = fn();

  function step(val) {
    const result = iterator.next(val);

    if (result.done) {
      return result.value;
    }

    result.value.then((data) => {
      step(data);
    });
  }

  return step();
}

autoFn(fetchBusinessData);
