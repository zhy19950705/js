// 利用 await Promise.race(executing); 这行语句，我们会等待 正在执行任务列表 中较快的任务执行完成之后，才会继续执行下一次循环。
async function asyncPool_es7(tasks, poolLimit) {
  const result = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  for (const task of tasks) {
    const promise = new Promise((resolve) => {
      Promise.resolve(task())
        .then((res) => {
          resolve(res);
          executing.splice(executing.indexOf(promise), 1);
        })
        .catch((error) => {
          resolve(error);
          executing.splice(executing.indexOf(promise), 1);
        });
    });
    result.push(promise);
    executing.push(promise);
    if (executing.length >= poolLimit) {
      await Promise.race(executing); // 等待较快的任务执行完成
    }
  }
  return Promise.all(result);
}

const timeout = (i) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(i);
      if (i > 1000) {
        reject(i);
      } else {
        resolve(i);
      }
    }, i * 1000)
  );
// (async () => {
//   const result = await asyncPool_es7(
//     [() => timeout(1), () => timeout(2), () => timeout(1), () => timeout(2)],
//     2
//   );
//   console.log(result);
// })();

function asyncPool_es6(tasks, poolLimit) {
  let count = 0;
  let result = []; // 存储所有的异步任务
  let executing = []; // 存储正在执行的异步任务
  const queue = function () {
    if (count === tasks.length) {
      return Promise.resolve();
    }
    const task = tasks[count++];
    const p = Promise.resolve().then(() => task());
    result.push(p);

    let r = Promise.resolve();
    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= tasks.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        r = Promise.race(executing);
      }
    }
    // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
    return r.then(() => queue());
  };
  return queue().then(() => Promise.all(result));
}
(async () => {
  const result = await asyncPool_es6(
    [() => timeout(1), () => timeout(2), () => timeout(1), () => timeout(2)],
    3
  );
  console.log(result);
})();
