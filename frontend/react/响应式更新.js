// react 的实现中，useEffect 订阅更新需要写明依赖哪个 state 的变化
// 本次的实现，与 react 不同的是，无需写明依赖的 state，所以其实更像一个 solidjs 的实现

function Eg() {
  const [getValue, setValue] = useState(0);

  useEffect(() => {
    console.log("value", getValue());
  });

  const value = useMemo(() => {
    return getValue() + 1;
  });

  setTimeout(() => {
    setValue(1);
  }, 1000);

  console.log("value + 1", value);
}

const effectStack = [];

function subscribe(effect, subs) {
  subs.add(effect);
  effect.deps.add(subs); // 用于 effect callback 后续清除依赖
}

function cleanup(effect) {
  for (const subs of effect.deps) {
    subs.delete(effect);
  }
  effect.deps.clear();
}

function useState(value) {
  const subs = new Set();
  const getter = () => {
    const effect = effectStack[effectStack.length - 1];
    if (effect) {
      subscribe(effect, subs);
    }
    return value;
  };
  const setter = (nextValue) => {
    value = nextValue;
    for (const effect of [...subs]) {
      effect.execute();
    }
  };
  return [getter, setter];
}

function useEffect(callback) {
  const execute = () => {
    cleanup(effect);
    effectStack.push(effect);
    try {
      callback();
    } finally {
      effectStack.pop();
    }
  };
  const effect = {
    execute,
    deps: new Set(),
  };
  execute();
}

function useMemo(callback) {
  const [v, setV] = useState();
  useEffect(() => setV(callback()));
  return v();
}

Eg();
