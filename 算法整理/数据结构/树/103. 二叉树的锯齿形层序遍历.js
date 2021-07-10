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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let queue = [];
  const result = [];
  if (root) {
    queue.push(root);
  }
  let count = 1;
  while (queue.length) {
    const temp = [];
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      const val = node.val;
      if (count % 2 === 0) {
        temp.unshift(val);
      } else {
        temp.push(val);
      }
      node.left && next.push(node.left);
      node.right && next.push(node.right);
    }
    count++;
    result.push(temp);
    queue = next;
  }
  return result;
};
