// 这个函数不能记录深度，分不清楚节点是哪一层的
function BFS1(root) {
  if (root == null) {
    return;
  }
  const queue = [root];

  while (queue.length !== 0) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}

function BFS2(root) {
  if (root == null) {
    return;
  }
  const queue = [root];
  let depth = 1;

  while (queue.length !== 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
}


// 如果每个节点都拥有自己的 depth（权重，这个权重可以是节点的其他值）


function BFS3State(node, depth) {
  this.node = node;
  this.depth = depth;
}

function BFS3(root) {
  if (root == null) {
    return;
  }

  const queue = [new BFS3State(root, 1)];

  while (queue.length !== 0) {
    const state = queue.shift();
    if (state.node.left) {
      queue.push(new BFS3State(node.node.left, node.depth + 1));
    }
    if (state.node.right) {
      queue.push(new BFS3State(node.node.right, node.depth + 1));
    }
  }
}