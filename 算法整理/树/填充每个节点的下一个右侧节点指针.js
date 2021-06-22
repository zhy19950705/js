/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root;
  dfs(root.left, root.right);
  return root;
};

function dfs(left, right) {
  if (left === null || right === null) return;
  left.next = right;
  dfs(left.left, left.right);
  dfs(left.right, right.left);
  dfs(right.left, right.right);
}
