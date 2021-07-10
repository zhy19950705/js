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
  if (!root) return null;
  let curLevel = [root];
  while (curLevel.length) {
    const nextLevel = [];
    const length = curLevel.length;
    for (let [index, item] of curLevel.entries()) {
      if (index < curLevel.length - 1) {
        item.next = curLevel[index + 1];
      }
      item.left && nextLevel.push(item.left);
      item.right && nextLevel.push(item.right);
    }
    curLevel = nextLevel;
  }
  return root;
};
