/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    root = stack.pop();
    result.unshift(root.val);
    if (root.left) stack.push(root.left);
    if (root.right) stack.push(root.right);
  }
  return result;
};
