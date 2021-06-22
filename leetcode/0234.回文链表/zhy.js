const arrayToLink = require("../../arrayToLink");

/**
 * 将值复制到数组中后用双指针法
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head && !head.next) return true;
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};

/**
 * 将值复制到数组中后用双指针法
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;

  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let nextHead = slow.next;
  slow.next = null;

  let prev = null;
  let cur = nextHead;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  while (prev) {
    if (head.val !== prev.val) return false;
    prev = prev.next;
    head = head.next;
  }
  return true;
};
const head = arrayToLink([1, 2, 2, 1]);
isPalindrome(head);
