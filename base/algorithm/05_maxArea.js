// 盛最多水的容器
function maxArea(height) {
  let i = 0,
    j = height.length - 1;
  let res = 0;
  while (i < j) {
    res =
      height[i] > height[j]
        ? Math.max(res, [j - i] * height[j--])
        : Math.max(res, [j - i] * height[i++]);
  }
  return res;
}
