/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set();
  while (head) {
    if (set.has(head.val)) {
      return true;
    }
    set.add(head.val);
    head = head.next;
  }
  return true;
};

var hasCycle = function (head) {
  if (!head) return null;
  let fast = head,
    slow = head;
  while (fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};
