/**
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 如果节点数小于两个，则直接返回head
  if (head === null || head.next === null) return head;
  // 新的头结点为head.next
  let newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};

/**
 * 头插法
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dumpyHead = new ListNode(null, head);
  let temp = dumpyHead;
  while (temp.next && temp.next.next) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return dumpyHead.next;
};
