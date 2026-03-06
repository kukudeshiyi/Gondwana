// 堆化

// 下沉
const heap = [9, 8, 6, 3, 1];

function downHeap(low, high) {
  let i = low,
    j = 2 * low + 1;
  while (j <= high) {
    if (j + 1 <= high && heap[j] < heap[j + 1]) {
      j = j + 1;
    }
    if (heap[i] < heap[j]) {
      const temp = heap[i];
      heap[i] = heap[j];
      heap[j] = temp;
      i = j;
      j = 2 * i + 1;
    } else {
      break;
    }
  }
}

// 上浮
function upHeap(low, high) {
  let i = high,
    j = Math.floor((i - 1) / 2);
  while (j >= low) {
    if (heap[i] > heap[j]) {
      const temp = heap[i];
      heap[i] = heap[j];
      heap[j] = temp;
      i = j;
      j = Math.floor((i - 1) / 2);
    } else {
      break;
    }
  }
}
