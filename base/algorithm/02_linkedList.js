// 反转链表
function reverseList(head) {
  if (!head) {
    return head;
  }
  let prevNode = null;
  let currentNode = head;
  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
}

// 递归版本
function reverseListRecursion(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const ret = reverseListRecursion(head.next);
  head.next.next = head;
  head.next = null;
  return ret;
}

// 链表中环的检测

// 遍历一次，利用额外的 o(n) 空间来存储遍历过的节点
// 使用 hash 存储，必须保证所有的值都不相等
function hasCycle(head) {
  if (head == null || head.next == null) {
    return false;
  }
  const nodeArr = [];
  let currentNode = head;
  while (currentNode) {
    const nextNode = currentNode.next;
    if (!nextNode) {
      return false;
    }
    if (nodeArr.includes(nextNode)) {
      return true;
    }
    nodeArr.push(currentNode);
    currentNode = nextNode;
  }
  return false;
}

// 利用双指针，时间复杂度为 O(n^2)
function hasCyclePro(head) {
  if (head == null || head.next == null) {
    return false;
  }
  let prev = head,
    cur = head.next;

  while (cur) {
    let nextNode = cur.next;
    while (nextNode) {
      if (!nextNode) {
        return false;
      }
      if (nextNode === prev) {
        return true;
      }
      if (nextNode === cur) {
        break;
      }
      nextNode = nextNode.next;
    }
    prev = prev.next;
    cur = cur.next;
  }

  return false;
}

// 两个有序的链表合并
// 删除链表倒数第 k 个节点
// 寻找链表的中间节点
