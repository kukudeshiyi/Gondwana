// 介绍防抖节流原理、区别以及应用，并用JavaScript进行实现

// 解释原理
// 防抖，英文名叫 debounce，一段时间内执行一次，用户输入框内持续输入进行模糊搜索，但不需要每输入一个字符都要去进行一次搜索
// 节流，英文名叫 throttle，一段时间内执行固定次数，对于用户的连续点击没必要持续发送请求，而是间隔一定时间发送，防止服务器被请求打爆
function debounce(fn, time) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), time);
  };
}

// immediate debounce
function debounceImmediate(fn, time, immediate) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    if (immediate) {
      timer = setTimeout(() => {
        timer = null;
      }, time);
      if (!timer) {
        fn?.(...args);
      }
    } else {
      timer = setTimeout(() => fn(...args), time);
    }
  };
}

// 使用定时器来实现
function throttle(fn, time) {
  let timer;
  return function (...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, time);
  };
}

// 使用时间戳计算来实现
function throttleTimestamp(fn, time) {
  let previous = Date.now();
  return function (...args) {
    const now = Date.now();
    if (now - previous > time) {
      fn(...args);
      previous = now;
    }
  };
}
