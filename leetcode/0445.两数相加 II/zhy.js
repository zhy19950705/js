/**
 * 翻转链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverse(l1);
  l2 = reverse(l2);
  let head = new ListNode(null);
  let temp = head;
  let add = 0;
  let sum = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    add = sum > 9 ? 1 : 0;
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  add && (temp.next = new ListNode(add));
  return reverse(head.next);
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

/**
 * 栈
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let add = 0;
  let sum = 0;
  let temp;
  while (stack1.length || stack2.length) {
    let num1 = stack1.pop() || 0;
    let num2 = stack2.pop() || 0;
    sum = num1 + num2 + add;
    add = sum > 9 ? 1 : 0;
    let node = new ListNode(sum % 10, temp);
    temp = node;
  }
  if (add) {
    let node = new ListNode(add, temp);
    temp = node;
  }
  return temp;
};
