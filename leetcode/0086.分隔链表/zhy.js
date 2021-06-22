/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const arrayToLink = require("../../arrayToLink");
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let newHead = new ListNode(null);
  let dumpyHead = new ListNode(null, head);
  let temp = newHead;
  let cur = dumpyHead;
  while (cur && cur.next) {
    if (cur.next.val >= x) {
      temp.next = new ListNode(cur.next.val);
      cur.next = cur.next.next;
      temp = temp.next;
    } else {
      cur = cur.next;
    }
  }
  cur.next = newHead.next;
  return dumpyHead.next;
};
partition(arrayToLink([2, 1]), 2);
