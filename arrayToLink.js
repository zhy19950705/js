function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
function arrayToLink(arr = []) {
  for (let [index, value] of arr.entries()) {
    arr[index] = new ListNode(value);
    if (index >= 1) {
      arr[index - 1].next = arr[index];
    }
  }
  console.log(arr[0]);
  return arr[0];
}
arrayToLink([1, 2, 3]);
module.exports = arrayToLink;
