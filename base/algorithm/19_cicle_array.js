class CycleArray {
  constructor(size = 1) {
    this.size = size;
    this.arr = new Array(size);
    this.start = 0;
    this.end = 0;
    this.count = 0;
  }

  resize(newSize) {
    const newArr = new Array(newSize);

    for (let i = 0; i < this.count; i++) {
      newArr[i] = this.arr[(this.start + i) % this.size];
    }

    this.arr = newArr;
    this.start = 0;
    this.end = this.count;
    this.size = newSize;
  }

  addFirst(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }

    this.start = (this.start - 1 + this.size) % this.size;
    this.arr[this.start] = val;
    this.count++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }

    this.arr[this.start] = null;
    this.start = (this.start + 1) % this.size;
    this.count--;
    if (this.count > 0 && this.count === this.size / 4) {
      this.resize(this.size / 2);
    }
  }

  addLast(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    this.arr[this.end] = val;
    this.end = (this.end + 1) % this.size;
    this.count++;
  }

  removeLast() {
    if (this.isEmpty()) {
      throw new Error('Array is empty');
    }
    this.end = (this.end - 1 + this.size) % this.size;
    this.arr[this.end] = null
    this.count--;
    if (this.count > 0 && this.count === this.size / 4) {
      this.resize(this.size / 2);
    }
  }

  getFirst() {
    if (this.isEmpty()) {
      throw new Error('Array is empty');
    }
    return this.arr[this.start];
  }

  getFirst() {
    if (this.isEmpty()) {
      throw new Error('Array is empty');
    }
    const lastIndex = (this.end - 1 + this.size) % this.size;
    return this.arr[lastIndex];
  }

  isFull() {
    return this.count === this.size;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
}