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
// 利用递归的思想拆分元素进行排序
// 递归终止条件 if( arr.length <=2 ){ return sortResult; }
// 递归公式 arr12 = sort(arr1) && sort(arr2)

function mergeSort(arr, left, right) {
  if (left === right) return;
  const mid = parseInt(left + ((right - left) >> 1));
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  const temp = [];
  let p1 = left;
  let p2 = mid + 1;
}

function sort(array) {
  if (!checkArray(array)) return;
  mergeSort(array, 0, array.length - 1);
  return array;
}

function mergeSort(array, left, right) {
  // 左右索引相同说明已经只有一个数
  if (left === right) return;
  // 等同于 `left + (right - left) / 2`
  // 相比 `(left + right) / 2` 来说更加安全，不会溢出
  // 使用位运算是因为位运算比四则运算快
  let mid = parseInt(left + ((right - left) >> 1));
  mergeSort(array, left, mid);
  mergeSort(array, mid + 1, right);

  let help = [];
  let i = 0;
  let p1 = left;
  let p2 = mid + 1;
  while (p1 <= mid && p2 <= right) {
    help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
  }
  while (p1 <= mid) {
    help[i++] = array[p1++];
  }
  while (p2 <= right) {
    help[i++] = array[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    array[left + i] = help[i];
  }
  return array;
}

// kuaisupaixv
// duipaixv
