/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;
  if (length === 0) return 0;
  if (length === 1) return nums[0];
  if (length === 2) return Math.max(nums[0], nums[1]);
  return Math.max(robHouse(nums, 0, length - 2), robHouse(nums, 1, length - 1));
};

function robHouse(nums, start, end) {
  console.log(start, end);
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(second, first + nums[i]);
    first = temp;
  }
  return second;
}
