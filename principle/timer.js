function Timer() {
  this.timeId = null;
  this.func = null;
}

Timer.prototype.repeat = function (func, ms, ...args) {
  if (this.func === null) {
    this.func = func;
  }
  if (this.func !== func) {
    return;
  }
  this.timeId = setTimeout(() => {
    func.apply(this, args);
    this.repeat(func, ms, ...args);
  }, ms);
};

Timer.prototype.clear = function () {
  clearTimeout(this.timeId);
};

var self = globalThis;
const a = (...args) => {
  console.log(self, args);
};

const timer = new Timer();
timer.repeat(a, 1000, 1, 2);
setTimeout(() => {
  timer.clear();
}, 2000);
