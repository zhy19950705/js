/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dumpyHead = new ListNode(null);
  let sum;
  let add = 0;
  let cur = dumpyHead;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    add = sum < 10 ? 0 : 1;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (add) {
    cur.next = new ListNode(add);
  }
  return dumpyHead.next;
};
