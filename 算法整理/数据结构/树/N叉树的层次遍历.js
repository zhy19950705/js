function fn(head) {
  if (!head) return;
  let curLevel = [head];
  const result = [];
  while (curLevel.length) {
    const nextLevel = [];
    const curResult = [];
    for (let cur of curLevel) {
      curResult.push(cur);
      if (cur.children.length > 0) {
        nextLevel.push(...cur.children);
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
    this.children = [];
  }
}
const root = new LinkNode(0);
const node1 = new LinkNode(1);
const node2 = new LinkNode(2);
const node3 = new LinkNode(3);
const node4 = new LinkNode(4);
const node5 = new LinkNode(5);
const node6 = new LinkNode(6);
const node7 = new LinkNode(7);
const node8 = new LinkNode(8);
root.children = [node1, node2, node3];
node1.children = [node4, node5];
node2.children = [node6, node7];
node4.children = [node8];
console.log(fn(root));
