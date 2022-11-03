// 经典的二分查找

function search(arr, target) {
  let low = 0;
  let high = arr.length;
  while (low <= high) {
    const middle = Math.floor(low + (high - low) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}
