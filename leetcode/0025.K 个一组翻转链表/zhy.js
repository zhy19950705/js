/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dumpyHead = new ListNode(null, head);
  // 初始化pre和end都指向dummy。pre指每次要翻转的链表的头结点的上一个节点。end指每次要翻转的链表的尾节点
  let prev = dumpyHead;
  let end = dumpyHead;
  while (end) {
    //循环k次，找到需要翻转的链表的结尾,这里每次循环要判断end是否等于空,因为如果为空，end.next会报空指针异常
    for (let i = 0; i < k && end; i++) {
      end = end.next;
    }
    //如果end==null，即需要翻转的链表的节点数小于k，不执行翻转。
    if (!end) break;
    //记录下要翻转链表的头节点
    let start = prev.next;
    //先记录下end.next,方便后面链接链表
    let next = end.next;
    //然后断开链表
    end.next = null;
    //翻转链表,pre.next指向翻转后的链表。1->2 变成2->1。 dummy->2->1
    prev.next = reverse(start);
    //翻转后头节点变到最后。通过.next把断开的链表重新链接。
    start.next = next;
    //将pre换成下次要翻转的链表的头结点的上一个节点。即start
    prev = start;
    //翻转结束，将end置为下次要翻转的链表的头结点的上一个节点。即start
    end = prev;
  }
  return dumpyHead.next;
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
