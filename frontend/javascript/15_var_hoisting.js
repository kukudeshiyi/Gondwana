// 第二个函数会覆盖掉第一个函数
// 如果 var 只定义没赋值，同名函数便可覆盖它
var showName;

function showName() {
  console.log("极客邦");
}

showName();
console.log(typeof showName);

// b(); // call b second

// var b = "Hello world";

// function b() {
//   console.log("call b fist");
// }
// function b() {
//   console.log("call b second");
// }
