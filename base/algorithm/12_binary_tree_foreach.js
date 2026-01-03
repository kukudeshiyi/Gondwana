// 二叉树的遍历

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    (this.left = null), (this.right = null);
  }
}

const rootNode = new BinaryTreeNode(1);
const leftNode = new BinaryTreeNode(2);
const rightNode = new BinaryTreeNode(3);

rootNode.left = leftNode;
rootNode.right = rightNode;

// 先序遍历 rootNode -> leftNode -> rightNode
function A(node) {
  if (!node) {
    return;
  }
  console.log(node.value);
  A(node.left);
  A(node.right);
}

// 中序遍历 leftNode -> rootNode -> rightNode
function B(node) {
  if (!node) {
    return;
  }
  B(node.left);
  console.log(node.value);
  B(node.right);
}

// 后续遍历 leftNode -> rightNode -> rootNode

function C(node) {
  if (!node) {
    return;
  }
  C(node.left);
  C(node.right);
  console.log(node.value);
}

A(rootNode);
console.log("-----");
B(rootNode);
console.log("-----");
C(rootNode);

function traverse(arr) {
  var outLen = arr.length; // 1

  for (var i = 0; i < outLen; i++) {
    // 1 + n + 1 + n
    var inLen = arr[i].length; // n

    for (var j = 0; j < inLen; j++) {
      // n(2n+2)
      console.log(arr[i][j]); // n * n
    }
  }
}
