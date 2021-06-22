/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const length = preorder.length;
  if (length === 0) return null;
  return dfs(preorder, 0, length - 1, inorder, 0, length - 1);
};

function dfs(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) return null;
  const rootVal = preorder[preStart];
  const index = inorder.indexOf(rootVal);
  const size = index - inStart;

  const root = new TreeNode(rootVal);
  root.left = dfs(
    preorder,
    preStart + 1,
    preStart + size,
    inorder,
    inStart,
    index - 1
  );
  root.right = dfs(
    preorder,
    preStart + size + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  );
  return root;
}
