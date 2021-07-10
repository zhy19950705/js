/** 前序遍历，递归 */
function PreTraverse(node) {
  if (node === null) return;
  console.log(node);
  PreTraverse(node.left);
  PreTraverse(node.right);
}

/** 前序遍历，循环 */
// 1. 每拿到一个 节点 就把它保存在 栈 中
// 2. 继续对这个节点的 左子树 重复 过程1，直到左子树为 空
// 3. 因为保存在 栈 中的节点都遍历了 左子树 但是没有遍历 右子树，所以对栈中节点 出栈 并对它的 右子树 重复 过程1
// 4. 直到遍历完所有节点

function PreTraverse(node) {
  const result = [];
  const stack = [];
  while (root !== null || stack.length > 0) {
    while (root !== null) {
      stack.push(root);
      result.push(root.val);
      root = root.left;
    }
    root = stack.pop().right;
  }
  return result;
}

/** 中序遍历 */
function MidTraverse(node) {
  if (node === null) return;
  MidTraverse(node.left);
  console.log(node);
  MidTraverse(node.right);
}

/** 中序遍历，循环 */
function inorderTravers(root) {
  const result = [];
  const stack = [];
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
}

/** 后序遍历 */
function PostOrderTraverse(node) {
  if (node === null) return;
  PostOrderTraverse(node.left);
  PostOrderTraverse(node.right);
  console.log(node);
}

/** 后序遍历，循环 */
function postorderTrarver(root) {
  const result = [];
  const stack = [root];
  while (stack.length) {
    root = stack.pop();
    result.unshift(root.val);
    root.left && stack.push(root.left);
    root.right && stack.push(root.right);
  }
  return result;
}
