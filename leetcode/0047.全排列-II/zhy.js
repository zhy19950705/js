/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const length = nums.length;
  if (length === 0) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  const used = {};
  function dfs(path) {
    if (path.length === length) {
      return result.push(path.slice());
    }
    for (let [index, num] of nums.entries()) {
      if (
        used[index] === true ||
        (index > 0 && nums[index] === nums[index - 1] && !used[index - 1])
      )
        continue;
      path.push(num);
      used[index] = true;
      dfs(path);
      used[index] = false;
      path.pop();
    }
  }
  dfs([]);
  console.log(result);
  return result;
};
permuteUnique([1, 1, 2]);
