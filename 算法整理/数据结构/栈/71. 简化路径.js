/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const dirs = path.split("/");
  if (dirs.length === 0) return "/";
  const stack = [];
  for (let dir of dirs) {
    if (dir === "" || dir === ".") {
      continue;
    }
    if (".." === dir) {
      if (stack.length !== 0) {
        stack.pop();
      }
      continue;
    }
    stack.push(dir);
  }
  if (stack.length === 0) return "/";
  return "/" + stack.join("/");
};
