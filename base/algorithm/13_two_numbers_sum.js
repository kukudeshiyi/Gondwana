// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

const nums = [2, 7, 11, 15];
const target = 9;

// 暴力解法 n^2
function getElementsBasedOnTarget(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length && result.length === 0; i++) {
    const currentItem = nums[i];
    const currentTarget = target - currentItem;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === currentTarget) {
        result.push(currentItem, nums[j]);
        break;
      }
    }
  }
  return result;
}

// 预先构建映射，取消第二次遍历，复杂度缩减为 n
// 缺点:数组中不能有相同的元素，否则 map 会被覆盖掉
// { 2:index[] }
// 时间复杂度为 2n

function getElementsBasedOnTarget1(nums, target) {
  const result = [];
  const itemToIndexMap = nums.reduce((pre, cur, index) => {
    pre[cur] = index;
    return pre;
  }, {});
  for (let i = 0; i < nums.length; i++) {
    const currentItem = nums[i];
    const currentTarget = target - currentItem;

    const currentTargetIndex = itemToIndexMap[currentTarget];
    if (typeof currentTargetIndex === "number" && currentTargetIndex !== i) {
      result.push(currentItem, currentTarget);
      break;
    }
  }
  return result;
}

// !!!CAUTION: 不是自己第一次想出来的
// 运行时构建映射，时间复杂度为 n
function getElementsBasedOnTarget2(nums, target) {
  const itemToIndexMap = {}; // {value: index}
  for (let i = 0; i < nums.length; i++) {
    const currentItem = nums[i];
    const currentTarget = target - currentItem;
    const currentTargetIndex = itemToIndexMap[currentTarget];
    if (typeof currentTargetIndex === "number") {
      return [currentItem, currentTarget];
    }
    itemToIndexMap[currentItem] = i;
  }
  return result;
}

console.log(getElementsBasedOnTarget(nums, target));
console.log(getElementsBasedOnTarget1([7, 11, 2, 15, 2], 9));
console.log(getElementsBasedOnTarget2([7, 11, 2, 15, 2], 9));

// leetcode
// https://leetcode.cn/problems/two-sum/?envType=problem-list-v2&envId=2cktkvj

// function twoSum(nums: number[], target: number): number[] {
//   const map = {};
//   const len = nums.length;
//   for(let i  = 0; i < len; i++){
//       const currentNum = nums[i];
//       const currentTargetIndex = map[target - currentNum];
//       if(typeof currentTargetIndex === "number"){
//           return [i, currentTargetIndex];
//       }
//       map[currentNum] = i;
//   }
// };

// function twoSum(nums: number[], target: number): number[] {
//   const map = new Map();
//   const len = nums.length;
//   for(let i  = 0; i < len; i++){
//       const currentNum = nums[i];
//       const currentTargetIndex = map.get(target - currentNum);
//       if(typeof currentTargetIndex === "number"){
//           return [i, currentTargetIndex];
//       }
//       map.set(currentNum,i);
//   }
// };
