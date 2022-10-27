// 实现 lodash 的_.get

// object (Object): The object to query.
// path (Array|string): The path of the property to get.
// [defaultValue] (*): The value returned for undefined resolved values.

// var object = { 'a': [{ 'b': { 'c': 3 } }] };

// _.get(object, 'a[0].b.c');
// => 3

// _.get(object, ['a', '0', 'b', 'c']);
// => 3

// _.get(object, 'a.b.c', 'default');
// => 'default'

const REG_EXP = /^([a-zA-Z0-9]{1,})\[([0-9]{1,})\]$/;

function get(obj, path, defaultValue) {
  if (typeof obj !== "object") {
    return defaultValue;
  }
  const paths = path.replace(/\[(\d+)\]/g, ".$1");
  let res = obj;
  for (let path of paths) {
    res = obj[path];
    if (res === undefined) {
      return defaultValue;
    }
  }
  return res;
}
