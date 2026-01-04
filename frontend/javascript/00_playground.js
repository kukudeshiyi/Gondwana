// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("123456"));


function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("12321"));
console.log(isPalindrome("12344321"));
console.log(isPalindrome("1234231"));


"abcbca"

// 还用回文串判断
// 在第一次遇见不一样的时候，删除：看两个指针指向元素的下一个，是否与对面的一样，一样的话删除自己
// 再次做回文串判断，如果还不行，直接 false，可以就为 true

// function A(str, removeCount = 0){
//   const len = str.length;
//   for(let i = 0; i< len/2; i++){
//     if(str[i] !== str[len-i-1] && removeCount > 0){
//       return false;
//     }
//     if(str[i] !== str[len-i-1] && removeCount <= 0){
//       const nextValFromLeft = str[i+1];
//       const nextValFromRight = str[len-i-2];
//       if(nextValFromLeft === str[len-i-1]){
//         // str = str.splice(i,1);
//       }else if(nextValFromRight === str[i]){
//         // str = str.splice(len,1);
//       }
//       return A(newStr, ++removeCount)
//     }
//   }
//   return true;
// }

/**
 * 遗留问题
 * Array 的所有方法
 * String 的所有方法
 * 正则表达式
 */



// 使用双指针，如果碰到不对的字符，则删除两个都看下子串是不是回文的，是就 true，不是就false

// function B(str) {
//   const len = str.length;
//   let i = 0, j = len - 1;
//   while (i < j && str[i] === str[j]) {
//     i++;
//     j--;
//   }

//   if (isPalindrome(i + 1, j) || isPalindrome(i, j - 1)) {
//     return true;
//   }

//   function isPalindrome(start, end) {
//     while (start < end) {
//       if (str(start) !== str(end)) {
//         return false;
//       }
//       start++;
//       end--;
//     }
//     return true;
//   }

//   return false;
// }


// function toi(str) {
//   // 先去掉空格
//   // 使用正则表达式匹配
//   // 提取捕获组
//   // 判断是不是在 max 和 min 之间
//   // 不是就直接返回匹配组就可以了
//   const newStr = str.trim();
//   const regex = /\b([-\+]?\d+).*/
//   const res = newStr.match(regex);
//   let targetNum = 0;
//   if (res && res[1]) {
//     targetNum = Number(res[1]);
//     if (isNaN(targetNum)) {
//       targetNum = 0;
//     }
//   }

//   const max = Math.pow(2, 31) - 1;
//   const min = -max - 1;
//   if (targetNum > max) {
//     return max
//   }

//   if (targetNum < min) {
//     return min;
//   }

//   return targetNum;
// }

// console.log("toi1", toi("  -123213asdadsa"));
// console.log("toi2", toi("  123213asdadsa"));
// console.log("toi3", toi("asdsa123213asdadsa"));
// console.log("toi4", toi("9007199254740992asdadsa"));



// 验证闭包变量的检索优先 outer 作用域

// function father() {
//   let a = 8;
//   return {
//     getFn() {
//       return a
//     },
//     setFn(val) {
//       a = val;
//     }
//   }
// }

// let a = 10;
// const obj = father();
// console.log(obj.getFn()); // 8
// obj.setFn(12);
// console.log(obj.getFn()); // 12
// const c = obj.getFn;
// console.log(c()); // 12


// 合并有序链表

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
function removeNthFromEnd(head, n) {
  const guard = new ListNode(-1);
  guard.next = head;
  let slowPointer = guard, fastPointer = guard.next;
  let total = 1;
  while (fastPointer.next) {
    fastPointer = fastPointer.next;
    number++;
  }

  const targetNum = total - n;
  let num = 0;
  while (num !== targetNum) {
    slowPointer = slowPointer.next;
    num++;
  }

  slowPointer.next = slowPointer.next.next;

  return guard.next;
};

function removeNthFromEnd1(head, n) {
  const guard = new ListNode(-1);
  guard.next = head;
  let slow = fast = guard;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return guard.next;
};

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// 2,1 3
// 3,2,1,4

// 输入：head = [1,2]
// 输出：[2,1]

// 输入：head = []
// 输出：[]

// 空间换时间
// 一次遍历然后存储所有的节点，最后倒着将节点连接到 guard 节点上完成反转

// 单个指针
// 从第二个节点开始，每次都将节点置换为 guard 的下一个节点
function reverseList(head) {
  const guard = new ListNode(-1);
  guard.next = head;

  if (!(guard.next && guard.next.next)) {
    return head;
  }

  let pointer = guard.next;

  while (pointer.next) {
    const lastGuardNext = guard.next; // 1
    guard.next = pointer.next; // 2
    pointer.next = pointer.next.next; // 1 => 3
    guard.next.next = lastGuardNext; // 2 => 1
  }

  return guard.next;
};

function reverseList1(head) {
  let pre = null;

  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};

// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

// 输入：head = [5,3], left = 1, right = 1
// 输出：[5]
function reverseBetween(head, left, right) {
  let pre = head, cur = head.next;
  if (!head.next) {
    return head;
  }

  let num = 2;
  while (num < right) {
    if (num < left) {
      pre = cur;
      cur = cur.next;
      num++;
      continue;
    }


    const lastPreNext = pre.next;
    pre.next = cur.next; // 1 => 3
    cur.next = cur.next.next; // 2 => 4
    pre.next.next = lastPreNext; // 3 => 2
    num++;
  }

  return head;
};


// function mergeTwoLists(list1, list2) {
//   const head = new ListNode(-1);
//   let current = head;
//   while (list1 && list2) {
//     if (list1.val > list2.val) {
//       current.next = list2;
//       current = list2;
//       list2 = list2.next;
//     } else {
//       current.next = list1;
//       current = list1;
//       list1 = list1.next
//     }
//   }

//   current.next = list1 ? list1 : list2

//   return head.next;
// };

// function deleteDuplicates1(head) {
//   // 从头遍历
//   // 如果下一个和自己一样那就删除，下一个和自己不一样那就移动到下一个继续判断，直到没有了
//   let current = head;

//   while (current && current.next) {
//     const nextNode = current.next;
//     if (current.val === nextNode.val) {
//       current.next = nextNode.next;
//       nextNode.next = null;
//       continue;
//     }
//     current = nextNode;
//   }

//   return head;
// };

// function deleteDuplicates2(head) {
//   const guard = new ListNode(-1);
//   guard.next = head;
//   let current = guard;
//   // let duplicatedVal;
//   while (current.next && current.next.next) {
//     if (current.next.val === current.next.next.val) {
//       let duplicatedVal = current.next.val;
//       while (current.next && current.next.val === duplicatedVal) {
//         current.next = current.next.next;
//       }
//       continue;
//     }
//     current = current.next;
//   }
//   return guard.next;
// };


// [1,2,3,3,4,4,5]
// 输出
// [1,2,4]
// 预期结果
// [1,2,5]

//foo 函数
// function* foo() {
//   let response1 = yield fetch('https://www.geekbang.org')
//   console.log('response1 inside')
//   // console.log(response1)
//   let response2 = yield fetch('https://www.geekbang.org/test')
//   console.log('response2 inside')
//   // console.log(response2)
// }

// // 执行 foo 函数的代码
// let gen = foo()
// function getGenPromise(gen) {
//   return gen.next().value
// }
// getGenPromise(gen).then((response) => {
//   console.log('response1 outside')
//   // console.log(response)
//   return getGenPromise(gen)
// }).then((response) => {
//   console.log('response2 outside')
//   // console.log(response)
//   getGenPromise(gen);
// })


function levelOrder(root) {
  if (!root) {
    return [];
  }
  let currentQueue = [root];
  let nextQueue = [];
  const res = [[]];
  while (currentQueue.length) {
    const node = currentQueue.shift();

    if (node.left) {
      nextQueue.push(node.left);
    }

    if (node.right) {
      nextQueue.push(node.right);
    }

    const curRes = res.at(-1);
    curRes.push(node.val);

    if (!currentQueue.length && nextQueue.length) {
      currentQueue = nextQueue;
      nextQueue = [];
      res.push([]);
    }
  }
  return res;
};

function levelOrder1(root) {
  if (!root) {
    return [];
  }
  const queue = [root];
  const res = [[]];

  let currentSize = 1;
  let nextSize = 0;

  while (currentSize > 0) {
    const node = queue.shift();
    currentSize--;

    if (node.left) {
      nextSize++;
      queue.push(node.left);
    }

    if (node.right) {
      nextSize++;
      queue.push(node.right);
    }

    const curRes = res.at(-1);
    curRes.push(node.val);

    if (currentSize <= 0 && nextSize > 0) {
      currentSize = nextSize;
      nextSize = 0;
      res.push([]);
    }
  }
  return res;
};


function permute(nums) {
  const res = [];
  const cur = [];
  const isUsed = {};
  const len = nums.length;

  function dfs(index) {
    if (index >= len) {
      res.push(cur.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!isUsed[nums[i]]) {
        isUsed[nums[i]] = true;
        cur.push(nums[i]);
        dfs(index + 1);
        curr.pop();
        isUsed[nums[i]] = false;
      }
    }
  }

  dfs(index);
  return res;
};

function myNew(fn, ...args) {
  const object = Object.create(fn.prototype);
  const symFn = Symbol("fn");
  object[symFn] = fn;
  const res = object[symFn](...args);
  delete object[symFn];
  return res instanceof Object ? res : object;
}

// 组合继承
// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Parent.prototype.getName = function () {
//   return this.name;
// }

// function Child(name, age, nickName) {
//   Parent.call(this, name, age);
//   this.nickName = nickName;
// }

// Child.prototype = new Parent();

// const child1 = new Child("jack", 12, "ass");

// console.log(child1.getName());
// console.log(child1 instanceof Parent);

// 寄生组合继承

// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Parent.prototype.getName = function () {
//   return this.name;
// }

// function Child(name, age, nickName) {
//   Parent.call(this, name, age);
//   this.nickName = nickName;
// }

// Child.prototype = Object.create(Parent.prototype, {
//   constructor: {
//     value: Child,
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// })

// const child1 = new Child("jack", 12, "ass");

// console.log(child1.getName());
// console.log(child1 instanceof Parent);


// Object.assign\...\concat\slice
// 实现对象的浅拷贝

// function shallowClone(target) {
//   if (typeof target === "object" && target !== null) {
//     const newTarget = Array.isArray(target) ? [] : {};
//     for (let key in target) {
//       if (target.hasOwnProperty(key)) {
//         newTarget[key] = target[key];
//       }
//     }
//     return newTarget;
//   } else {
//     return target;
//   }
// }

// function deepClone(target) {
//   if (typeof target === "object" && target !== null) {
//     const newTarget = Array.isArray(target) ? [] : {};
//     for (let key in target) {
//       if (target.hasOwnProperty(key)) {
//         if (typeof target[key] === "object" && target !== null) {
//           newTarget[key] = deepClone(target[key]);
//         } else {
//           newTarget[key] = target[key];
//         }
//       }
//     }
//     return newTarget;
//   } else {
//     return target;
//   }
// }

// // Date、RegExp、Error、Function
// function deepClone1(target, map = new WeakMap) {
//   if (target instanceof Date) {
//     return new Date(target);
//   }

//   if (target instanceof Regexp) {
//     return new RegExp(target)
//   }

//   if (target instanceof Error) {
//     return new Error(target);
//   }

//   // if fn is native code, can not copy to new one
//   if (typeof target === "function") {
//     return new Function(`return ${target.toString()}`);
//   }

//   if (map.has(target)) {
//     return map.get(target);
//   }

//   const cloneObj = Object.create(Object.getPrototypeOf(target), Object.getOwnPropertyDescriptors(target));

//   map.set(target, cloneObj);

//   if (typeof target === "object" && target !== null) {
//     for (let key of Reflect.ownKeys(obj)) {
//       cloneObj[key] = (typeof target === "object" && target !== null) || typeof target === "function" ? deepClone1(obj[key], map) : obj[key];
//     }
//   }

//   return target;
// }

// const a = { a: 1, b: 2, c: 3, d: { y: 1 } }
// const b = shallowClone(a);
// const c = deepClone(a);
// a.a = 8;
// a.d.y = 99;
// console.log(b);
// console.log(c);


// 输入：nums = [1, 2, 3]
// 输出：[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
function subsets(nums) {
  // 穷举、树形、坑位长度是可变的、但是我们可以固定肯定坑位长度
  // 每次固定一个坑位长度、然后再固定一个数字

  const len = nums.length;
  const cur = [];
  const res = [[]];
  let visited = {};
  let elementNum = 1;

  function dfs(nth) {
    if (nth >= elementNum) {
      res.push(cur.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        cur.push(nums[i]);
        visited[nums[i]] = true;
        dfs(nth + 1);
        visited[nums[i]] = false;
        cur.pop();
      }
    }
  }

  while (elementNum <= len) {
    dfs(0);
    cur = [];
    visited = {};
    elementNum++;
  }

  return res;
};