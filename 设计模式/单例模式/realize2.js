function Universe() {
  let instance = this;
  this.start_time = 0;
  this.bang = "big";
  Universe = function () {
    return instance;
  };
}

const uni1 = new Universe();
const uni2 = new Universe();
uni1.bang = "123";
console.log(uni1 === uni2);
console.log(uni2.bang);
