let Universe;
(function () {
  let instance;
  Universe = function Universe() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.start_time = 0;
    this.bang = "big";
  };
})();
let a = new Universe();
let b = new Universe();
console.log(a === b);
a.bang = "123";
console.log(b.bang);
