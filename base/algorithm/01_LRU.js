// 实现 LRU 缓存淘汰算法
// 思维拓展一下，除了 LRU 之外，还有先进先出算法 FIFO 以及最少使用算法 LFU
// LFU 可以使用数组实现，然后需要另外一个数组记录每一项的访问次数，当存储已满时，最先替换掉访问次数最少的

// 使用链表实现 LRU
class LRULinkedList {
  constructor(length) {
    this.linkedListLength = length;
    this.currentLinkedListLength = 0;
    this.head = {
      prev: null,
      value: null,
      next: null,
    };
  }

  set(value) {
    if (this.currentLinkedListLength < this.linkedListLength) {
      const newNode = {
        prev: this.head,
        value,
        next: this.head.next,
      };
      this.head.next = newNode;
      this.currentLinkedListLength++;
      return;
    }
    let lastNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === null && currentNode !== this.head) {
        lastNode = currentNode;
      }
    }
    if (lastNode) {
      const prevNode = lastNode.prev;
      prevNode.next = null;
      const newNode = {
        prev: this.head,
        value,
        next: this.head.next,
      };
      this.head.next = newNode;
    }
  }
  get(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode.prev !== this.head) {
          const prevNode = currentNode.prev;
          prevNode.next = currentNode.next;
          currentNode.prev = this.head;
          currentNode.next = this.head.next;
          this.head.next = currentNode;
        }
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
  }
}
