/*
 *
 * 1.状态机
 * 2.then 可以链式调用，需要返回 Promise
 * 3.then 可以被同一个 Promise 多次调用，需要用队列维护回调
 * 4.值穿透 如果 then 的 成功回调不是方法，忽略它；如果失败回调不是方法，抛出异常
 * 5.如果状态已经改变，直接执行 then 的回调
 * 6.兼容同步任务，使用 setTimeout 包装 Promise 的 resolve/reject 回调
 *
 */

// Promise/A+规定的三种状态
const PENGDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(excutor) {
    this._status = PENGDING; // Promise状态
    this._value = undefined; // 储存then回调return的值
    this._resolvedQueue = []; // 成功队列, resolve时触发
    this._rejectQueue = []; // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (value) => {
      // 把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      setTimeout(() => {
        if (this._status !== PENGDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULLFILLED; // 变更状态
        this._value = value; // 储存当前value

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while (this._resolvedQueue.length) {
          this._resolvedQueue.shift()(value);
        }
      });
    };

    let _reject = (reason) => {
      setTimeout(() => {
        if (this._status !== PENGDING) return;
        this._status = REJECTED;
        while (this._rejectQueue.length) {
          this._rejectQueue.shift()(reason);
        }
      });
    };

    // new Promise()时立即执行executor,并传入resolve和reject
    try {
      excutor(_resolve, _reject);
    } catch (e) {
      _reject(e);
    }
  }

  // then方法,接收一个成功的回调和一个失败的回调
  then(resolveCallback, rejectCallback) {
    // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
    typeof resolveCallback !== "function"
      ? (resolveCallback = (val) => val)
      : null;
    typeof rejectCallback !== "function"
      ? (rejectCallback = (reason) => {
          throw new Error(reason instanceof Error ? reason.message : reason);
        })
      : null;

    // return一个新的promise
    return new MyPromise((resolve, reject) => {
      // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fullfilledFn = (value) => {
        try {
          // 执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveCallback(value);
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,并把 (resolve, reject) 透传下去来处理结果,否则直接resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (err) {
          reject(err);
        }
      };

      const rejectedFn = (error) => {
        try {
          let x = rejectCallback(error);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (err) {
          reject(err);
        }
      };

      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENGDING:
          this._resolvedQueue.push(fullfilledFn);
          this._rejectQueue.push(rejectedFn);
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULLFILLED:
          // this._value是上一个then回调return的值
          fullfilledFn(this._value);
          break;
        case REJECTED:
          rejectedFn(this._value);
          break;
      }
    });
  }

  // Promise.resolve 的入参可能有以下几种情况
  // 无参数 [直接返回一个resolved状态的 Promise 对象]
  // 普通数据对象 [直接返回一个resolved状态的 Promise 对象]
  // 一个Promise实例 [直接返回当前实例]
  // 一个thenable对象(thenable对象指的是具有then方法的对象) [转为 Promise 对象，并立即执行thenable对象的then方法。]
  static resolve(value) {
    if (value && value instanceof MyPromise) {
      return value;
    } else if (
      value &&
      typeof value === "object" &&
      typeof value.then === "function"
    ) {
      return new MyPromise((resolve) => value.then(resolve));
    } else if (value) {
      return new MyPromise((resolve) => resolve(value));
    } else {
      return new MyPromise((resolve) => resolve());
    }
  }

  // 区别在于Promise.reject始终返回一个状态的rejected的Promise实例，
  // 而Promise.resolve的参数如果是一个Promise实例的话，返回的是参数对应的Promise实例，所以状态不一 定
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }

  // catch方法是对then方法的封装，只用于接收reject(reason)中的错误信息。
  // 因为在then方法中onRejected参数是可不传的，不传的情况下，错误信息会依次往后传递，直到有onRejected函数接收为止，
  // 因此在写promise链式调用的时候，then方法不传onRejected函数，只需要在最末尾加一个catch()就可以了，
  // 这样在该链条中的promise发生的错误都会被最后的catch捕获到。
  catch(rejectCb) {
    return this.then(undefined, rejectCb);
  }

  // finally方法用于无论是resolve还是reject，finally的参数函数都会被执行。
  finally(callback) {
    // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value),
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          throw reason;
        })
    );
  }

  // Promise.all方法接收一个promise数组，返回一个新promise2，并发执行数组中的全部promise，
  // 所有promise状态都为resolved时，promise2状态为resolved并返回全部promise结果，结果顺序和promise数组顺序一致。
  // 如果有一个promise为rejected状态，则整个promise2进入rejected状态。
  static all(promiseArr = []) {
    let count = 0;
    let result = [];
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach((item, index) => {
        // Promise.resolve(p)用于处理传入值不为Promise的情况
        MyPromise.resolve(item).then(
          (res) => {
            count++;
            result[index] = res;
            if (count === promiseArr.length) {
              resolve(result);
            }
          },
          (error) => {
            //有一个Promise被reject时，MyPromise的状态变为reject
            reject(error);
          }
        );
      });
    });
  }

  // 它的入参也是一个 Promise 实例数组，
  // 然后其 then 注册的回调方法是数组中的某一个 Promise 的状态变为 fulfilled 的时候就执行。
  // 因为 Promise 的状态只能改变一次，
  // 那么我们只需要把 Promise.race 中产生的 Promise 对象的 resolve 方法，
  // 注入到数组中的每一个 Promise 实例中的回调函数中即可。
  static race(promiseArr = []) {
    return new Promise((resolve, reject) => {
      // 同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
      for (let item of promiseArr) {
        // Promise.resolve(p)用于处理传入值不为Promise的情况
        MyPromise.resolve(item).then(
          (res) => {
            resolve(item);
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  }

  static allSettled(promiseArr = []) {
    let count = 0;
    let result = [];
    if (promiseArr.length === 0) return Promise.resolve([]);
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach((p, index) => {
        MyPromise.resolve(p)
          .then((res) => {
            result[index] = {
              status: "fullfilled",
              value: res,
            };
            count++;
            if (count === promiseArr.length) {
              resolve(result);
            }
          })
          .catch((e) => {
            result[index] = {
              status: "rejected",
              value: e,
            };
            count++;
            if (count === promiseArr.length) {
              resolve(result);
            }
          });
      });
    });
  }
}

// test case
const p1 = new MyPromise((resolve) => {
  resolve(1); //同步executor测试
});

p1.then((res) => {
  console.log(res);
  return 2; //链式调用测试
})
  .then() //值穿透测试
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve, reject) => {
      resolve(3); //返回Promise测试
    });
  })
  .then((res) => {
    console.log(res);
    // throw new Error("reject测试"); //reject测试
  })
  .catch((err) => {
    // catch测试
    console.log(err);
  })
  .finally((res) => {
    // finally测试
    console.log(res);
    // throw new Error('4')
    return new MyPromise((resolve, reject) => {
      reject(4);
    });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

new MyPromise((resolve) => {
  setTimeout(() => resolve(5), 500);
}).then((res) => {
  console.log(res);
  p1.then((res) => console.log(6)); // 状态已改变测试 && 多次调用测试
});

// 输出
// 1
// 2
// 3
// Error: reject测试
// undefined
// Error: 4
// 5
// 6
