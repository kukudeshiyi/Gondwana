function deepClone(obj, cache = new WeakMap()) {
  if (cache.has(obj)) return cache.get(obj);

  if (obj === null || typeof obj !== "object" || typeof obj === "function") {
    return obj;
  }

  let result;
  if (obj instanceof Date) result = new Date(obj);
  else if (obj instanceof RegExp) result = new RegExp(obj);
  else
    result = Array.isArray(obj)
      ? []
      : Object.create(Object.getPrototypeOf(obj));

  cache.set(obj, result);

  // Date 和 RegExp 没有需要递归的子属性，直接返回
  if (obj instanceof Date || obj instanceof RegExp) return result;

  for (const key of Reflect.ownKeys(obj)) {
    result[key] = deepClone(obj[key], cache);
  }

  return result;
}
