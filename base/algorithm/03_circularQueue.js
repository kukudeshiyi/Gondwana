// 循环队列
class CircularQueue {
  constructor(length) {
    this.queue = [];
    this.length = length;
    this.head = 0;
    this.tail = 0;
  }
  isFull() {
    return (this.tail + 1) % this.length === this.head;
  }
  isEmpty() {
    return this.head === this.tail;
  }
  enqueue(value) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.length;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    const value = this.queue[this.head];
    this.head = (this.head + 1) % this.length;
    return value;
  }
}
