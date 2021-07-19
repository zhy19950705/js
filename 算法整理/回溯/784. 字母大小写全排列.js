/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = [],
    n = s.length;
  s = s.split("");
  function dfs(path, begin) {
    if (path.length === n) {
      result.push(path.join(""));
      return;
    }
    if (s[begin] >= 0 && s[begin] <= 9) {
      path.push(s[begin]);
      dfs(path, begin + 1);
      path.pop();
    } else {
      const arr = [s[begin].toLowerCase(), s[begin].toUpperCase()];
      console.log(arr);
      for (let v of arr) {
        path.push(v);
        dfs(path, begin + 1);
        path.pop();
      }
    }
  }
  dfs([], 0);
  return result;
};
