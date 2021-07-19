/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 中序遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = -Infinity;
  function helper(node) {
    if (!node) return true;
    if (!helper(node.left)) {
      return false;
    }
    // 判断当前节点是否大于中序遍历的前一个节点，如果大于，说明满足 BST，继续遍历；否则直接返回 false。
    if (node.val <= pre) {
      return false;
    }
    pre = node.val;
    return helper(node.right);
  }
  return helper(root);
};
