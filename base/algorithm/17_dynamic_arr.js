class MyDynamicArray {
  constructor(initCapacity) {
    this.data = [];
    this.size = 0;
    this.INIT_CAPACITY = 1;
    this.init(initCapacity);
  }

  init(initCapacity) {
    const capacity = initCapacity || this.INIT_CAPACITY;
    this.data = new Array(capacity);
    this.size = 0;
  }

  resize(capacity) {
    const oldArr = this.data;
    this.data = new Array(capacity);
    for (let i = 0; i < oldArr.length; i++) {
      this.data[i] = oldArr[i]
    }
  }

  // 单独拿出来，因为不考虑搬移，只在最后添加一个元素，所以不使用 add
  addLast(e) {
    const cap = this.data.length;
    if (this.size === cap) {
      this.resize(2 * cap);
    }
    this.data[this.size] = e;
    this.size++;
  }

  add(index, e) {
    this.checkPositionIndex(index);

    const cap = this.data.length;
    if (this.size === cap) {
      this.resize(2 * cap);
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[index] = e;
    this.size++;
  }

  addFirst(e) {
    this.add(0, e);
  }

  removeLast() {
    if (this.size === 0) {
      throw new Error("Cannot remove from empty array");
    }

    const cap = this.data.length;

    if (this.size === Math.floor(cap / 4)) {
      this.resize(Math.floor(cap / 2));
    }

    const deletedVal = this.data[this.size - 1];
    this.data[this.size - 1] = null;
    this.size--;
    return deletedVal;
  }

  remove(index) {
    this.checkElementIndex(index);

    const cap = this.data.length;
    if (this.size === Math.floor(cap / 4)) {
      this.resize(Math.floor(cap / 2));
    }

    const deletedVal = this.data[index];

    for (let i = index; i < this.size; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.size - 1] = null;
    this.size--;
    return deletedVal;
  }

  removeFirst() {
    return this.remove(0);
  }

  get(index) {
    this.isElementIndex(index)
    return this.data[index];
  }

  set(index, element) {
    this.checkElementIndex(index);
    const oldValue = this.data[index];
    this.data[index] = element;
    return oldValue;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  isElementIndex(index) {
    return index >= 0 && index < this.size;
  }

  isPositionIndex(index) {
    return index >= 0 && index <= this.size;
  }

  checkElementIndex(index) {
    if (!this.isElementIndex(index)) {
      throw new Error(`Index: ${index}, Size: ${this.size}`);
    }
  }

  checkPositionIndex(index) {
    if (!this.isPositionIndex(index)) {
      throw new Error(`Index: ${index}, Size: ${this.size}`)
    }
  }
}