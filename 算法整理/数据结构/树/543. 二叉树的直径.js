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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let deep = 0;
  const dfs = (node) => {
    if (node === null) return 0;
    const leftDp = dfs(node.left);
    const rightDp = dfs(node.right);
    deep = Math.max(deep, leftDp + rightDp + 1);
    return Math.max(leftDp, rightDp) + 1;
  };
  dfs(root);
  return deep;
};
