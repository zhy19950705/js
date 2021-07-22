/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
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
var deleteDuplicates = function (head) {
  if (!head) return head;
  // 由于链表的头节点可能会被删除，因此我们需要额外使用一个哑节点（dummy node）指向链表的头节点。
  let dumpyHead = new ListNode(null, head);
  let cur = dumpyHead;
  while (cur.next && cur.next.next) {
    // 如果下一个节点和下下个节点的值相同，则开始遍历删除
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      // 不断删除相同值的节点
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      // 如果当前 cur.next 与 cur.next.next 对应的元素不相同，那么说明链表中只有一个元素值为cur.next的节点，
      // 那么我们就可以将 cur 指向 cur.next
      cur = cur.next;
    }
  }
  console.log(dumpyHead.next);
  return dumpyHead.next;
};
