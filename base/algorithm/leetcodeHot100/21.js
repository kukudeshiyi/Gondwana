/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const guard = new ListNode();
  let currentNode = guard;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      currentNode.next = list1;
      list1 = list1.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = list1 ? list1 : list2;

  return guard.next;
};

// 递归解法
// 上面是遍历解法,还可以使用递归解法进行求解
var mergeTwoLists2 = function (list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists2(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists2(list2.next, list1);
    return list2;
  }
};
