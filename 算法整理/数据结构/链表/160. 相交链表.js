/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let an = 0,
    bn = 0;
  let aCur = headA,
    bCur = headB;
  while (aCur) {
    aCur = aCur.next;
    an++;
  }
  while (bCur) {
    bCur = bCur.next;
    bn++;
  }
  (aCur = headA), (bCur = headB);
  if (an > bn) {
    while (an > bn) {
      aCur = aCur.next;
      an--;
    }
  } else if (an < bn) {
    while (an < bn) {
      bCur = bCur.next;
      bn--;
    }
  }
  while (aCur && bCur) {
    if (aCur === bCur) {
      return aCur;
    }
    aCur = aCur.next;
    bCur = bCur.next;
  }
  return null;
};
