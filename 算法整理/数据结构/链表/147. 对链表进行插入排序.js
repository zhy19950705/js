/**
 * https://leetcode-cn.com/problems/insertion-sort-list/
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
var insertionSortList = function (head) {
  let dumpyHead = new ListNode(null, head);
  let lastSorted = head;
  let cur = head.next;
  while (cur) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next;
    } else {
      let previous = dumpyHead;
      while (previous.next.val < cur.val) {
        previous = previous.next;
      }
      lastSorted.next = cur.next;
      cur.next = previous.next;
      previous.next = cur;
    }
    cur = lastSorted.next;
  }
  return dumpyHead.next;
};
