/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const arrayToLink = require("../../arrayToLink");
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  let head = null;
  for (let li of lists) {
    if (li) {
      head = mergeTwoList(head, li);
    }
  }
  return head;
};
function mergeTwoList(l1, l2) {
  let head = new ListNode(null);
  let temp = head;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      temp.next = l2;
      l2 = l2.next;
    } else {
      temp.next = l1;
      l1 = l1.next;
    }
    temp = temp.next;
  }
  temp.next = l1 ? l1 : l2;
  return head.next;
}

let lists = [arrayToLink([2]), arrayToLink([]), arrayToLink([-1])];
mergeKLists(lists);
