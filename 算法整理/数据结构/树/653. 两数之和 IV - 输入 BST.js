/**
 * https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const list = [];
  inorder(root, list);
  let left = 0,
    right = list.length - 1;
  while (left < right) {
    const sum = list[left] + list[right];
    if (sum === k) {
      return true;
    } else if (sum > k) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
function inorder(node, list) {
  if (!node) return;
  inorder(node.left, list);
  list.push(node.val);
  inorder(node.right, list);
}
