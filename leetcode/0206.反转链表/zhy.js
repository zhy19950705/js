/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur) {
    // 在更改引用之前，还需要另一个指针来存储下一个节点
    let next = cur.next;
    // 将当前节点的 next 指针改为指向前一个元素
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
