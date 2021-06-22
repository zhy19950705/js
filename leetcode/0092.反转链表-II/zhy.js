/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dumpyHead = new ListNode(null, head);
  let prev = dumpyHead;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  let rightNode = prev;
  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  for (let i = left; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = prev.next;
  let cur = rightNode.next;
  // 注意：切断链接
  prev.next = null;
  rightNode.next = null;
  // 第 4 步：同第 206 题，反转链表的子区间
  reverseList(leftNode);
  // 第 5 步：接回到原来的链表中
  prev.next = rightNode;
  leftNode.next = cur;
  return dumpyHead;
};

function reverseList(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

/**
 * 头插法
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dumpyHead = new ListNode(null, head);
  let prev = dumpyHead;
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  let cur = prev.next;
  for (let j = 0; j < right - left; j++) {
    // 先将 curr 的下一个节点记录为 next；
    const next = cur.next;
    // 执行操作 ①：把 curr 的下一个节点指向 next 的下一个节点；
    cur.next = next.next;
    // 执行操作 ②：把 next 的下一个节点指向 pre 的下一个节点；
    next.next = prev.next;
    // 执行操作 ③：把 pre 的下一个节点指向 next。
    prev.next = next;
  }
  return dumpyHead.next;
};
