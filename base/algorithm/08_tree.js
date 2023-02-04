// 构造一颗二叉查找树，其中序遍历便输出的便是从小到大排列的数据，所以也叫二叉排序树

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.value = new Node(0);
  }

  preOrder(node) {
    if (!node) {
      return;
    }
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node) {
    if (!node) {
      return;
    }
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
  postOrder(node) {
    if (!node) {
      return;
    }
    this.inOrder(node.left);
    this.inOrder(node.right);
    console.log(node.value);
  }

  find(value) {
    let current = this.value;
    while (current) {
      if (value < this.value) {
        current = current.left;
      }

      if (value > this.value) {
        current = current.right;
      }

      return current;
    }
  }

  insert() {
    //
  }

  delete(value) {
    // 查找到节点
    // 当前节点没有子节点，直接删除
    // 当前节点有一个左子节点或者右子节点, 直接替换
    // 当前节点有两个子节点，寻找右子树中最小节点进行替换
    let current = this.value;
    let parent = null;
    while (current && current.value !== value) {
      parent = current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    if (!current) {
      return;
    }

    if (current.left && current.right) {
      let minNode = current.right;
      let minNodeParent = current;
      while (minNode.left) {
        minNodeParent = minNode;
        minNode = minNode.left;
      }
      current.value === minNode.value;
      minNodeParent.left = null;
    }

    let node = null;

    if (current.left) {
      node = current.left;
    }
    if (current.right) {
      node = current.right;
    }

    // 删除为根节点
    if (!parent) {
      this.value = node;
    }

    if (parent.left === current) {
      parent.left = node;
    }

    if (parent.right === current) {
      parent.right = node;
    }
  }
}

const bsTree = new BinarySearchTree();
[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i) => bsTree.insert(i));

console.log("pre order:\n");
bsTree.preOrder(bsTree.value);
console.log("in order:\n");
bsTree.inOrder(bsTree.value);
console.log("post order:\n");
bsTree.postOrder(bsTree.value);

const aimNode = bsTree.find(5);
console.log("the aim node:\n", aimNode.value);

const deleteNode = bsTree.delete(8);
console.log("this delete node:\n", deleteNode.value);
