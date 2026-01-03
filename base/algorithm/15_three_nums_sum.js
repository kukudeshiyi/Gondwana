function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const res = [];
  let i = 0;
  while (i < len - 2) {
    let m = i + 1,
      n = len - 1;
    while (m !== n) {
      const sum = nums[i] + nums[m] + nums[n];
      if (sum > 0) {
        n--;
      } else if (sum < 0) {
        m++;
      } else {
        res.push([nums[i], nums[m], nums[n]]);
        break;
      }
    }
    i++;
  }
  // return res;
  console.log("res", res);
  res.forEach((item) => item.sort((a, b) => a - b));
  return [...new Set(res.map((item) => item.join()))].map((item) =>
    item.split(",")
  );
}

console.log(threeSum([-2, 0, 1, 1, 2]));
