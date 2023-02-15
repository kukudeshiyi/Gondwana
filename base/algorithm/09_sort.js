function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// maopaopaixv
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
// charupaixv
function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}
// xuanzepaixv
function selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swap(arr, i, minIndex);
  }
}
// guibingpaixv

function mergeSort(arr, left, right) {
  if (left === right) return;
  const mid = parseInt(left + ((right - left) >> 1));
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  const temp = [];
  let p1 = left;
  let p2 = mid + 1;
  while (p1 <= mid && p2 <= right) {
    temp.push(arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]);
  }
  while (p1 <= mid) {
    temp.push(arr[p1++]);
  }
  while (p2 <= mid) {
    temp.push(arr[p2++]);
  }
  for (let i = 0; i < temp.length; i++) {
    arr[left + i] = temp[i];
  }
  return arr;
}

// kuaisupaixv
function quickSort(arr, left, right) {
  const target = arr[left];
  let i = left,
    j = right;
  while (i < j) {
    while (i < j && arr[j] > target) {
      j--;
    }
    if (i < j) {
      arr[i] = arr[j];
    }
    while (i < j && arr[i] < target) {
      i++;
    }
    if (i < j) {
      arr[j] = arr[i];
    }
  }
  arr[i] = target;
  quickSort(arr, left, i);
  quickSort(arr, i + 1, right);
}

// duipaixv

// 验证各种排序算法
// 各种排序的时间以及空间复杂度
