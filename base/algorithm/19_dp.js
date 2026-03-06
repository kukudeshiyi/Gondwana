// coins amount
// fn(amount) 当前 amount 的由部分 coins 组成的最小个数的值
// 终态：amount 已经有了 coins 组成的组合
// 参与变量，amount、coins
// fn(amount) = Min(fn(amount - c1) + 1， fn(amount - c2) + 1, .... , fn(amount - cn) + 1);
// 边界值，fn(0) = 0;

function test(coins, amount) {
  const fn = [];
  fn[0] = 0;
  for (let i = 1; i < amount; i++) {
    fn[i] = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        fn[i] = Math.min(fn[i], fn[i - coins[j]] + 1);
      }
    }
  }
  if (fn[amount] === Infinity) {
    return -1;
  }
  return fn[amount];
}

// 有 n 件物品，物品体积用一个名为 w 的数组存起来，物品的价值用一个名为 value 的数组存起来；每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。现在有一个容量为 c 的背包，问你如何选取物品放入背包，才能使得背包内的物品总价值最大？
/**
 * 变量：c，n
 * 终态：c 容量的背包已经装满了 i 件物品
 * 拿出一件商品，反推状态
 * fn(i, c): 代表 i 件商品装满了容量 c 的背包的价值总和
 * fn(i, c) = Math.max(fn(i-1, c-w[i]) + values[i], fn(i-2, c-w[i-1]) + values[i-1]);
 * fn(0, 0) = 0
 */

// function test1(c, weights, values){
//   const len = weights.length;
//   const fn = new Array(len).fill([]);
//   fn[0][0] = 0;
//   for(let i = 1; i <= c; i++){
//     fn[i][j] = -Infinity;
//     for(let j = 1; j<= values.length; j++){
//       if(weights[i-1] <= c){
//         fn[i][j] = Math.max(fn[i][j], fn[i-1][j-1] + values[j])
//       }
//     }
//   }
//   if(){

//   }
// }

// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例: 输入: [10,9,2,5,3,7,101,18]

// 输出: 4 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

/**
 * f(i) = Math.max(f(i-1), f(i-1) + 1)
 *
 */


// 有 n 件物品，物品体积用一个名为 w 的数组存起来，物品的价值用一个名为 value 的数组存起来；每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。现在有一个容量为 c 的背包，问你如何选取物品放入背包，才能使得背包内的物品总价值最大？

// 目前背包c中已经放入了商品
// 那这一件在不在里面呢，怎么判断
// T(i，c) = Max(T(i-1, c), T(i+1, c))