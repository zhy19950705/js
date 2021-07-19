function EE(fn, once = false, context) {
  this.fn = fn;
  this.context = context;
  this.once = once;
}
class EventEmitter {
  constructor() {
    this.cache = {};
  }
  on(name, fn, context) {
    const e = new EE(fn, false, context);
    if (this.cache[name]) {
      this.cache[name].push(e);
    } else {
      this.cache[name] = [e];
    }
  }
  once(name, fn, context) {
    const e = new EE(fn, true, context);
    if (this.cache[name]) {
      this.cache[name].push(e);
    } else {
      this.cache[name] = [e];
    }
  }
  emit(name, ...args) {
    if (!this.cache[name]) return;
    const events = this.cache[name].slice();
    for (let e of events) {
      if (e.once) {
        this.off(name, e.fn);
      }
      e.fn.apply(e.context, args);
    }
  }
  off(name, fn) {
    if (!fn) {
      this.cache[name] = null;
      return;
    }
    const tasks = this.cache[name] || [];
    const index = this.cache[name].findIndex((e) => e.fn === fn);
    if (index > -1) {
      this.cache[name].splice(index, 1);
    }
  }
}
const eventBus = new EventEmitter();
function fn1(name, age) {
  console.log("fn1", name, age);
}
function fn2(name, age) {
  console.log("fn2", name, age);
}
function fn3(name, age) {
  console.log("fn3", name, age);
}
eventBus.on("test", fn1);
eventBus.once("test", fn2);
eventBus.on("test", fn3);

eventBus.emit("test", "zhy", 1);

eventBus.off("test", fn1);
eventBus.emit("test", "zhy", 2);

eventBus.off("test");
eventBus.emit("test", "zhy", 3);
