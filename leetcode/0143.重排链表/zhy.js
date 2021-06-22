/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return;
  let fast = head;
  let slow = head;
  //找中点，链表分成两个
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let newHead = slow.next;
  slow.next = null;
  //第二个链表倒置
  newHead = reverse(newHead);
  //链表节点依次连接
  while (newHead) {
    let temp = newHead.next;
    newHead.next = head.next;
    head.next = newHead;
    head = newHead.next;
    newHead = temp;
  }
};
function reverse(head) {
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
