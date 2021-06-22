/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(null);
  let temp = head;
  let add = 0;
  let sum = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    add = sum >= 10 ? 1 : 0;
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  add && (temp.next = new ListNode(add));
  return head;
};
