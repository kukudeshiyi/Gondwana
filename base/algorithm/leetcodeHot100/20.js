// 初始写法
var isValid = function (s) {
  const stack = [];
  const sArr = s.split("");
  while (sArr.length !== 0) {
    const item = sArr.shift();
    switch (item) {
      case "(":
      case "{":
      case "[":
        stack.push(item);
        break;
      case ")":
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          return false;
        }
        break;
      case "}":
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          return false;
        }
    }
  }
  return stack.length === 0;
};

// 优化写法
// 将括号的对应关系抽象为 map，这样判定逻辑只需要写一份就可以了
// 另外需要注意 stack 不为空也是无效的
var idValid = function (s) {
  const charMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (charMap[c]) {
      if (stack[stack.length - 1] !== charMap[c]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};
