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
var rightSideView = function (root) {
  if (root === null) return [];
  let curLevel = [root];
  const result = [];
  while (curLevel.length) {
    let nextLevel = [];
    for (let [index, cur] of curLevel.entries()) {
      if (index === curLevel.length - 1) {
        result.push(cur.val);
      }
      cur.left && nextLevel.push(cur.left);
      cur.right && nextLevel.push(cur.right);
    }
    curLevel = nextLevel;
  }
  return result;
};
