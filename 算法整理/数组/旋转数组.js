/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let previous
    for (let i = 0; i < k; i++) {
        previous = nums[nums.length - 1]
        for (let j = 0; j < nums.length; j++) {
            [previous, nums[j]] = [nums[j], previous]
        }
    }
    return nums
};
console.log(rotate([1,2,3,4,5,6,7], 3))