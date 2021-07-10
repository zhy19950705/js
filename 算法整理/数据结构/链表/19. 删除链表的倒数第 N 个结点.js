/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * https://leetcode-cn.com/problems/add-two-numbers/
 */
var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  while (n) {
    fast = fast.next;
    n--;
  }
  if (!head) return head.next;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
