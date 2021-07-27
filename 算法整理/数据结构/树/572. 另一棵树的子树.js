/**
 * https://leetcode-cn.com/problems/subtree-of-another-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root || !subRoot) return false;
  if (root.val === subRoot.val) {
    const same = isSameTree(root, subRoot);
    if (same) return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root) return false;
  if (!subRoot) return false;
  return (
    root.val === subRoot.val &&
    isSameTree(root.left, subRoot.left) &&
    isSameTree(root.right, subRoot.right)
  );
}
