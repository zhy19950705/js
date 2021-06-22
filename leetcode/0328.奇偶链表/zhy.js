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
var oddEvenList = function (head) {
  if (!head) return head;
  let evenHead = head.next;
  let odd = head,
    even = evenHead;
  while (even !== null && even.next !== null) {
    // 更新奇数节点时，奇数节点的后一个节点需要指向偶数节点的后一个节点，
    // 因此令 odd.next = even.next，然后令 odd = odd.next，此时 odd 变成 even 的后一个节点。
    odd.next = even.next;
    odd = odd.next;
    // 更新偶数节点时，偶数节点的后一个节点需要指向奇数节点的后一个节点，因此令 even.next = odd.next，
    //  然后令 even = even.next，此时 even 变成 odd 的后一个节点。
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
const head = new ListNode(0);
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
oddEvenList(head);
