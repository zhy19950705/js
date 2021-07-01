class DoubleLinkedNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.hashMap = {};
  this.dumpyHead = new DoubleLinkedNode(null, null);
  this.dumpyTail = new DoubleLinkedNode(null, null);
  this.dumpyHead.next = this.dumpyTail;
  this.dumpyTail.prev = this.dumpyHead;
};

LRUCache.prototype.isFull = function () {
  return Object.keys(this.hashMap).length === this.capacity;
};

LRUCache.prototype.addToHead = function (node) {
  const head = this.dumpyHead.next;
  node.next = head;
  node.prev = this.dumpyHead;
  head.prev = node;
  this.dumpyHead.next = node;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.next = null;
  node.prev = null;
  return node;
};

LRUCache.prototype.get = function (key) {
  if (key in this.hashMap) {
    const node = this.hashMap[key];
    this.addToHead(this.removeNode(node));
    return node.value;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (key in this.hashMap) {
    const node = this.hashMap[key];
    node.value = value;
    this.addToHead(this.removeNode(node));
  } else {
    if (this.isFull()) {
      const tail = this.dumpyTail.prev;
      delete this.hashMap[key];
      this.removeNode(tail);
    }
    const node = new DoubleLinkedNode(key, value);
    this.addToHead(node);
    this.hashMap[key] = node;
  }
};
