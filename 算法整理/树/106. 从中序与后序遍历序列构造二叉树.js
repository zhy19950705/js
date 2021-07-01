/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let length = inorder.length;
  if (length === 0) return null;
  return dfs(inorder, 0, length - 1, postorder, 0, length - 1);
};

/** 后序遍历的最后一个节点为根节点，根据根节点在中序遍历中的位置将数组一分为二，左边为左子树，右边为右子树 */
function dfs(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if (postStart > postEnd) return null;
  const rootVal = postorder[postEnd];
  const index = inorder.indexOf(rootVal);
  const leftSize = index - inStart;

  const root = new TreeNode(rootVal);
  root.left = dfs(
    inorder,
    inStart,
    index - 1,
    postorder,
    postStart,
    postStart + leftSize - 1
  );
  root.right = dfs(
    inorder,
    index + 1,
    inEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1
  );
  return root;
}
