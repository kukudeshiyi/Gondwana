class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #midOrderTraverse(node, res) {
    if (!node) {
      return;
    }

    this.#midOrderTraverse(node.left, res);

    res.push(node.val);

    this.#midOrderTraverse(node.right, res);
  }

  midOrderTraverse() {
    const res = [];
    this.#midOrderTraverse(this.root, res);
    return res;
  }

  #insertNode(node, val) {
    if (!node) {
      return new Node(val);
    }

    if (node.val >= val) {
      node.left = this.#insertNode(node.left, val);
    } else {
      node.right = this.#insertNode(node.right, val);
    }

    return node;
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      this.#insertNode(this.root, val);
    }
  }

  #search(node, val) {
    if (!node) {
      return null;
    }
    if (node.val === val) {
      return node;
    } else if (node.val > val) {
      return this.#search(node.left, val);
    } else {
      return this.#insertNode(node.right, val);
    }
  }

  search(val) {
    return this.#search(this.root, val);
  }

  #findMax(node) {
    while (node) {
      node = node.right;
    }
    return node;
  }

  #findMin(node) {
    while (node) {
      node = node.left;
    }
    return node;
  }

  #remove(node, val) {
    if (!node) {
      return node;
    }

    if (node.val === val) {
      if (!node.left && !node.right) {
        node = null;
      } else if (node.left) {
        const maxNode = this.#findMax(node.left);
        node.val = maxNode.val;
        node.left = this.#remove(node.left, maxNode.val);
      } else {
        const minNode = this.#findMin(node.right);
        node.val = minNode.val;
        node.right = this.#remove(node.right, maxNode.val);
      }
    } else if (node.val >= val) {
      node.left = this.#remove(node.left, val);
    } else {
      node.right = this.#remove(node.right, val);
    }

    return node;
  }

  remove(val) {
    this.#remove(this.root, val);
  }
}
