/**
 * 回溯
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const length = s.length;
  if (length < 4) return [];
  const result = [];
  function dfs(path, begin) {
    // 片段满4段，且耗尽所有字符
    if (path.length === 4 && begin === length) {
      // 拼成字符串，加入解集
      return result.push(path.join("."));
    }
    // 满4段，字符未耗尽，不用往下选了
    if (path.length === 4) return;
    // 加上要切的长度就越界，不能切这个长度
    let rest = length - path.join("").length;
    if (rest > (4 - path.length) * 3 || rest < 4 - path.length) {
      console.log(begin, path);
      return;
    }
    // 枚举出选择，三种切割长度
    for (let i = 1; i <= 3; i++) {
      // 不能切出'0x'、'0xx'
      if (i !== 1 && s[begin] === "0") return;
      // 当前选择切出的片段
      const str = s.substring(begin, begin + i);
      // 不能超过255
      if (i === 3 && str > 255) return;
      path.push(str);
      // 基于当前选择，继续选择，注意更新指针
      dfs(path, begin + i);
      path.pop();
    }
  }
  dfs([], 0);
  console.log(result);
  return result;
};

restoreIpAddresses("25525511135");
