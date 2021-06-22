function Traverse(head) {
  if (!head) return;
  const linkList = [head];
  const resultList = [];
  while (linkList.length) {
    const size = linkList.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      const cur = linkList.shift();
      temp.push(cur);
      if (cur.left) {
        linkList.push(cur.left);
      }
      if (cur.right) {
        linkList.push(cur.right);
      }
    }
    resultList.push(temp);
  }
  return resultList;
}

function Traverse2(head) {
  if (!head) return;
  const result = [];
  let curLevel = [head];
  while (curLevel.length) {
    const curResult = [];
    const nextLevel = [];
    for (let cur of curLevel) {
      curResult.push(cur);
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
// console.log(Traverse(root));
console.log(Traverse2(root));
