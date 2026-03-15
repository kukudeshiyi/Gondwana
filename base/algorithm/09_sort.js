// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// // maopaopaixv
// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
// }
// // charupaixv
// function insertion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
//       swap(arr, j, j + 1);
//     }
//   }
// }
// // xuanzepaixv
// function selection(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       minIndex = arr[j] < arr[minIndex] ? j : minIndex;
//     }
//     swap(arr, i, minIndex);
//   }
// }
// // guibingpaixv

// function mergeSort(arr, left, right) {
//   if (left === right) return;
//   const mid = parseInt(left + ((right - left) >> 1));
//   mergeSort(arr, left, mid);
//   mergeSort(arr, mid + 1, right);

//   const temp = [];
//   let p1 = left;
//   let p2 = mid + 1;
//   while (p1 <= mid && p2 <= right) {
//     temp.push(arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]);
//   }
//   while (p1 <= mid) {
//     temp.push(arr[p1++]);
//   }
//   while (p2 <= mid) {
//     temp.push(arr[p2++]);
//   }
//   for (let i = 0; i < temp.length; i++) {
//     arr[left + i] = temp[i];
//   }
//   return arr;
// }

// // kuaisupaixv
// function quickSort(arr, left, right) {
//   const target = arr[left];
//   let i = left,
//     j = right;
//   while (i < j) {
//     while (i < j && arr[j] > target) {
//       j--;
//     }
//     if (i < j) {
//       arr[i] = arr[j];
//     }
//     while (i < j && arr[i] < target) {
//       i++;
//     }
//     if (i < j) {
//       arr[j] = arr[i];
//     }
//   }
//   arr[i] = target;
//   quickSort(arr, left, i);
//   quickSort(arr, i + 1, right);
// }

// duipaixv

// 验证各种排序算法
// 各种排序的时间以及空间复杂度

// const arr = [5, 4, 3, 2, 1];

// function mergeSort(arr) {
//   const len = arr.length;
//   if (len <= 1) {
//     return arr;
//   }

//   const middleIndex = Math.floor(len / 2);
//   const left = mergeSort(arr.slice(0, middleIndex));
//   const right = mergeSort(arr.slice(middleIndex));

//   const leftLen = left.length;
//   const rightLen = right.length;
//   const newArr = [];
//   let i = 0,
//     j = 0;
//   while (i < leftLen && j < rightLen) {
//     if (left[i] <= right[j]) {
//       newArr.push(left[i]);
//       i++;
//     } else {
//       newArr.push(right[j]);
//       j++;
//     }
//   }

//   if (i >= len) {
//     newArr.push(...right);
//   } else {
//     newArr.push(...left);
//   }
//   // const newArr = [...left, ...new Array(rightLen).fill(0)];
//   // let i = leftLen - 1,
//   //   j = rightLen - 1,
//   //   m = newArr.length - 1;

//   // while (i >= 0 && j >= 0) {
//   //   if (left[i] >= right[j]) {
//   //     newArr[m] = left[i];
//   //     i--;
//   //     m--;
//   //   } else {
//   //     newArr[m] = right[j];
//   //     j--;
//   //     m--;
//   //   }
//   // }

//   // while (j >= 0) {
//   //   newArr[j] = right[j];
//   //   j--;
//   // }

//   return newArr;
// }

// function quickSort(arr, left, right) {
//   if (arr.length > 1) {
//     const partitionIndex = partition(arr, left, right);
//     if (left < partitionIndex - 1) {
//       quickSort(arr, left, partitionIndex - 1);
//     }
//     if (right > partitionIndex) {
//       quickSort(arr, partitionIndex, right);
//     }
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   const pivot = Math.floor(left + (right - left) / 2);
//   while (left <= right) {
//     if (arr[left] < arr[pivot]) {
//       left++;
//     }

//     if (arr[right] > arr[pivot]) {
//       right--;
//     }

//     if (left <= right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// console.log(mergeSort(arr));
// console.log(quickSort(arr, 0, arr.length - 1));

const testArr = [5, 4, 3, 2, 1];
// 冒泡排序
// 遗漏优化使用的 flag
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    let flag = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!flag) break;
  }
  return arr;
}

// console.log(bubbleSort(testArr));

//  选择排序
// 遗漏交换的时候的 if 条件
function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// console.log(selectSort(testArr));

// 插入排序
// function insertSort(arr) {
//   const len = arr.length;
//   for (let i = 1; i < len; i++) {
//     let temp = arr[i];
//     for (let j = i; j > 0; j--) {
//       if (temp < arr[j - 1]) {
//         arr[j] = arr[j - 1];
//       } else {
//         arr[j] = temp;
//         break;
//       }
//     }
//   }
//   return arr;
// }

// function insertSort(arr) {
//   const len = arr.length;
//   for (let i = 1; i < len; i++) {
//     let temp = arr[i]; // 当前要插入的元素
//     let j = i;
//     // 内层循环找到合适的插入位置
//     for (; j > 0; j--) {
//       if (temp < arr[j - 1]) {
//         arr[j] = arr[j - 1]; // 将较大的元素向后移动
//       } else {
//         break; // 如果找到合适的位置，退出内层循环
//       }
//     }
//     arr[j] = temp; // 将 temp 插入到正确的位置
//   }
//   return arr;
// }

// console.log(insertSort(testArr));

// function mergeSort(arr) {
//   const len = arr.length;

//   if (len <= 1) {
//     return arr;
//   }

//   const midIndex = Math.floor(len / 2);

//   const arr1 = mergeSort(arr.slice(0, midIndex));
//   const arr2 = mergeSort(arr.slice(midIndex));

//   return mergeArr(arr1, arr2);
// }

// function mergeArr(arr1, arr2) {
//   let i = 0,
//     j = 0; // 初始化值
//   const res = [];
//   const len1 = arr1.length;
//   const len2 = arr2.length;
//   while (i < len1 && j < len2) {
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }

//   if (i < len1) {
//     return res.concat(arr1.slice(i));
//   }

//   if (j < len2) {
//     return res.concat(arr2.slice(j));
//   }

//   return res;
// }

// console.log("merge sort", mergeSort([5, 4, 3, 2, 1]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  const len = arr.length;
  if (len > 1) {
    const index = p(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

function p(arr, left, right) {
  const s = arr[Math.floor(left + (right - left) / 2)];
  let i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < s) {
      i++;
    }

    while (arr[j] > s) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log("quick sort", quickSort([5, 4, 3, 2, 1]));
