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
var insertionSortList = function (head) {
  if (!head) return head;
  // 创建哑结点，用于将在 head 前插入结点转换为在哑结点后插入，统一处理，更方便
  let dumpyHead = new ListNode(null, head);
  // 记录已排序完成的结点末尾
  let lastSorted = head;
  // 当前需要新插入的结点
  let cur = head.next;
  while (cur) {
    if (cur.val >= lastSorted.val) {
      // 新插入的值正好是最大值，直接插入链表末尾
      lastSorted = lastSorted.next;
    } else {
      // 从头开始寻找插入位置
      let previous = dumpyHead;
      while (previous.next.val <= cur.val) {
        previous = previous.next;
      }
      // 将新结点插入链表
      lastSorted.next = cur.next;
      cur.next = previous.next;
      previous.next = cur;
    }
    // 更新新结点
    cur = lastSorted.next;
  }
  return dumpyHead.next;
};
