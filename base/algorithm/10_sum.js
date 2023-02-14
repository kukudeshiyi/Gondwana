// 不使用加号完成多数相加
// 当使用的是位运算了，所以先来复习下位运算的基础知识
// 左移，数字翻倍
// 右移，数字减半
// 与
// 或
// 异或：位不一样为 1，所以两个数字异或为不进位相加

function sum(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  const newA = a ^ b; // 获取不进位相加的和
  const newC = (a & b) << 1; // 与 加 左移得到进位结果
  return sum(newA, newC); // 两者继续相加
}
