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
function preOrderTraverse(root) {
  function fn(node) {
    if (node === null) return;
    result.push(node);
    fn(node.left, result);
    fn(node.right, result);
  }
  const result = [];
  fn(root);
  return result;
}

function fn2(node) {
  const stack = [];
  const result = [];
  // while (node || stack.length > 0) {
  //   while (node) {
  //     stack.push(node);
  //     result.push(node.value);
  //     node = node.left;
  //   }
  //   node = stack.pop().right;
  // }
  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      result.push(node.value);
      node = node.left;
    }
    node = stack.pop().right;
  }
  return result;
}
