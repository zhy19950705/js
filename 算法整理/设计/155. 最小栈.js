/**
 * https://leetcode-cn.com/problems/min-stack/
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (val < this.min) {
    this.min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const top = this.stack.pop();
  if (top === this.min) {
    this.min = Infinity;
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] < this.min) {
        this.min = this.stack[i];
      }
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
