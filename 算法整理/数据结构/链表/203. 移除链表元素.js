/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 */
var removeElements = function (head, val) {
  if (!head) return head;
  let dumpyHead = new ListNode(null, head);
  let cur = dumpyHead;
  while (cur) {
    while (cur && cur.next && cur.next.val === val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
  return dumpyHead.next;
};
