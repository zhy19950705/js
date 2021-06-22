function fn(head) {
  if (!head) return 0;
  let curLevel = [head];
  const result = [];
  while (curLevel.length) {
    let curResult = 0;
    const nextLevel = [];
    for (let cur of curLevel) {
      curResult += cur.value;
      if (cur.left) {
        nextLevel.push(cur.left);
      }
      if (cur.right) {
        nextLevel.push(cur.right);
      }
    }
    result.push(curResult);
    curLevel = nextLevel;
  }
  return result;
}
class LinkNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new LinkNode(0);
const node1 = new LinkNode(1);
const node2 = new LinkNode(2);
const node3 = new LinkNode(3);
const node4 = new LinkNode(4);
const node5 = new LinkNode(5);
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
console.log(fn(root));
