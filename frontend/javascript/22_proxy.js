const target = {
  name: "test",
};

const proxyObj = new Proxy(target, {
  get: (target, key) => {
    console.log(`read ${key}`);
    return target[key];
  },
  set: (target, key, value) => {
    console.log(`write ${key} to ${value}`);
    target[key] = value;
  },
});

proxyObj.name;
proxyObj.name = "others";

console.log(target.name);
