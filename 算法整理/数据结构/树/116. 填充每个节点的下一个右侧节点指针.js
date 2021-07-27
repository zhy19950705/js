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

var connect = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    const nextQueue = [];
    while (queue.length) {
      const node = queue.shift();
      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    }
    for (let i = 0; i < nextQueue.length - 1; i++) {
      nextQueue[i].next = nextQueue[i + 1];
    }
    queue = nextQueue;
  }
  return root;
};
