// 简化路径
function simplifyPath(path) {
  const CURRENT_PATH_SYMBOL = ".";
  const PARENT_PATH_SYMBOL = "..";
  const paths = path.split("/");
  const stack = [];
  while (paths.length) {
    const currentPath = paths.shift();
    switch (currentPath) {
      case PARENT_PATH_SYMBOL:
        stack.pop();
        continue;
      case CURRENT_PATH_SYMBOL:
      case "":
        continue;
      default:
        stack.push(currentPath);
    }
  }
  return "/" + stack.join("/");
}
// 矩形相交
