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

// 利用快慢指针，存在环的话，总会相遇，如果需要计算环的长度，那从第一次遇见开始计算，直到第二次遇见
function hasCyclePro(head) {
  if (head == null || head.next == null) {
    return false;
  }
  let prev = head,
    cur = head;
  while (cur) {
    if (!cur.next || !cur.next.next) {
      return false;
    }
    cur = cur.next.next;
    prev = prev.next;
    if (cur === prev) {
      return true;
    }
  }
  return false;
}

// 两个有序的链表合并

// 双指针
function mergeTwoLists(list1, list2) {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }
  const result = {
    val: undefined,
    next: null,
  };

  let pointerOne = list1,
    pointerTwo = list2;

  let cur = result;

  while (pointerOne && pointerTwo) {
    const val1 = pointerOne.val,
      val2 = pointerTwo.val;
    if (val1 > val2) {
      const next = pointerTwo.next;
      cur.next = pointerTwo;
      cur.next.next = null;
      cur = cur.next;
      pointerTwo = next;
    }
    if (val1 < val2) {
      const next = pointerOne.next;
      cur.next = pointerOne;
      cur.next.next = null;
      cur = cur.next;
      pointerOne = next;
    }
    const pointerOneNext = pointerOne.next;
    const pointerTwoNext = pointerTwo.next;
    cur.next = pointerOne;
    cur.next.next = pointerTwo;
    cur.next.next.next = null;
    pointerOne = pointerOneNext;
    pointerTwo = pointerTwoNext;
  }
  if (pointerOne) {
    cur.next = pointerOne;
  }
  if (pointerTwo) {
    cur.next = pointerTwo;
  }
  return result.next;
}

// 删除链表倒数第 k 个节点

// 寻找链表的中间节点
