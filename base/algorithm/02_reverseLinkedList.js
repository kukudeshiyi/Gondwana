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

// 链表中环的检测
// 两个有序的链表合并
// 删除链表倒数第 k 个节点
// 寻找链表的中间节点
