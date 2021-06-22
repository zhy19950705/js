/*
实现一个LazyMan， 可以按照以下方式调用:

  LazyMan('Hank');
输出:
  Hi!This is Hank!

  LazyMan('Hank').sleep(10).eat('dinner');
输出:
  Hi!This is Hank!
  //等待10秒..
  Wake up after 10 s!
  Eat dinner~
  
  LazyMan('Hank').eat('dinner').eat('supper');
输出:
  Hi!This is Hank!
  Eat dinner~
  Eat supper~

  LazyMan('Hank').sleepFirst(5).eat('supper');
输出:
  //等待5秒
  Wake up after 5
  Hi!This is Hank!
  Eat supper~
  以此类推。
*/
class LazyManFactory {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.tasks.push(() => {
      console.log(`Hi!This is ${name}`);
      this.next();
    });
    setTimeout(() => {
      this.next();
    }, 0);
  }
  sleep(time) {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time} s!`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
  eat(something) {
    this.tasks.push(() => {
      console.log(`Eat ${something}`);
      this.next();
    });
    return this;
  }
  sleepFirst(time) {
    this.tasks.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time} s`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
  next() {
    const task = this.tasks.shift();
    if (typeof task === "function") {
      task();
    }
  }
}

class LazyManFactory_v2 {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.tasks.push(() => {
      console.log(`Hi!This is ${name}`);
    });
    setTimeout(() => this.next(), 0);
  }
  async next() {
    while (this.tasks.length) {
      const task = this.tasks.shift();
      try {
        await task();
      } catch (e) {
        console.error(e);
      }
    }
  }
  eat(something) {
    // 同步任务不用返回 Promise
    this.tasks.push(() => {
      console.log(`Eat ${something}`);
    });
    return this;
  }
  sleep(seconds) {
    // 把返回 Promise 的函数加入任务队列
    // 不能直接把 Promise 加入任务队列，new 的时候 Promise 就开始执行了！
    this.tasks.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Wake up after ${seconds}s`);
            resolve();
          }, seconds * 1000);
        })
    );
    return this;
  }
  sleepFirst(seconds) {
    this.tasks.unshift(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Wake up after ${seconds}s`);
            resolve();
          }, seconds * 1000);
        })
    );
  }
}

function LazyMan(name) {
  return new LazyManFactory(name);
}

// LazyMan("Hank");
// Hi!This is Hank!

// LazyMan("Hank").sleep(10).eat("dinner");
// Hi!This is Hank!
// //等待10秒..
// Wake up after 10 s!
// Eat dinner~

// LazyMan("Hank").eat("dinner").eat("supper");
// Hi!This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan("Hank").sleepFirst(5).eat("supper");
// //等待5秒
// Wake up after 5
// Hi!This is Hank!
// Eat supper~
