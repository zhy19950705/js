/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  function backTrack(path, start) {
    // 所有路径都应该加入结果集，所以不存在结束条件
    result.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  }
  backTrack();
  return result;
};
subsets([1, 2, 3]);
