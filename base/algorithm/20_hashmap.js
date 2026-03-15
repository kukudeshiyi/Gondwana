// class KVNode {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//   }
// }

// class HashMapSimple {
//   constructor(capacity) {
//     this.arr = new Array(capacity);
//   }

//   hash(key) {
//     return key % this.arr.length;
//   }

//   get(key) {
//     const index = this.hash(key);
//     if (!this.arr[index]) {
//       return -1;
//     }
//     const list = this.arr[index];
//     const node = list.some(item => {
//       return item.key === key;
//     })
//     if (node) {
//       return node.value;
//     }

//     return -1;
//   }

//   put(key, value) {
//     const index = this.hash(key);
//     if (!this.arr[index]) {
//       const list = [];
//       list.push(new KVNode(key, value));
//       this.arr[index] = list;
//       return;
//     }

//     const list = this.arr[index];
//     const node = list.some(item => item.key === key);
//     if (node) {
//       node.value = value;
//       return;
//     }
//     list.push(new KVNode(key, value));
//   }

//   remove(key) {
//     const index = this.arr[index];
//     if (!this.arr[index]) {
//       return;
//     }

//     const list = this.arr[index];
//     list.forEach((item, index) => {
//       if (item.key === key) {
//         list.splice(index, 1);
//         return;
//       }
//     })
//   }
// }

// class Node {
//   constructor(key, val) {
//     this.key = key;
//     this.val = val;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class MyLinkedHashMap {
//   constructor() {
//     this.head = new Node(null, null);
//     this.tail = new Node(null, null);
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//     this.map = new Map();
//   }

//   get(key) {
//     if (!this.map.has(key)) {
//       return;
//     }
//     return this.map.get(key).val;
//   }

//   put(key, val) {
//     if (!this.map, has(key)) {
//       const node = new Node(key, val);
//       this.addLastNode(node);
//       this.map.set(key, node);
//       return;
//     }
//     this.map.get(key).val = val;
//   }

//   remove(key) {
//     if (!this.map.has(key)) {
//       return;
//     }
//     const node = this.map.get(key);
//     this.map.delete(key);
//     this.removeNode(node);
//   }

//   containsKey(key) {
//     return this.map.has(key);
//   }

//   keys() {
//     const keyList = [];
//     let p = this.head.next;
//     while (p !== this.tail) {
//       keyList.push(p.key);
//       p = p.next();
//     }
//     return keyList;
//   }

//   addLastNode(x) {
//     const temp = this.tail.prev;

//     x.next = this.tail;
//     x.prev = temp;

//     temp.next = x;
//     this.tail.prev = x;
//   }

//   removeNode(x) {
//     const prev = x.prev;
//     const next = x.next;
//     prev.next = next;
//     next.prev = prev;

//     x.next = null;
//     x.prev = null;
//   }
// }


class Node {
  constructor(key, val) {
    this.key = key,
      this.val = val;
  }
}

class MyArrayHashMap {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  get(key) {
    if (!this.map.has(key)) {
      return null;
    }

    return this.arr[this.map.get(key)].val;
  }

  put(key, val) {
    if (this.containsKey(key)) {
      const i = this.map.get(key);
      this.arr[i].val = val;
      return;
    }

    this.arr.push(new Node(key, val));
    this.map.set(key, this.arr.length - 1);
  }

  remove(key) {
    if (!this.map.has(key)) {
      return;
    }

    const index = this.map.get(key);
    const node = this.arr[index];

    const e = this.arr[this.arr.length - 1];
    this.arr[index] = e;
    this.arr[this.arr.length - 1] = node;

    this.map.set(e.key, index);
    this.arr.pop();
    this.map.delete(node.key);
  }

  randomKey() {
    const n = this.arr.length;
    const randomIndex = Math.floor(Math.random() * n);
    return this.arr[randomIndex].key;
  }

  containsKey(key) {
    return this.map.has(key);
  }

  size() {
    return this.map.size;
  }
}