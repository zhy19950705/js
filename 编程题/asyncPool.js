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

function asyncPool_es6(tasks = [], poolLimit = 2) {
  const n = tasks.length,
    result = Array(n).fill(false);
  let count = 0;
  return new Promise((resolve) => {
    while (count < poolLimit) {
      next();
    }
    function next() {
      let current = count++;
      // 处理边界条件
      if (current >= n) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        !result.includes(false) && resolve(result);
        return;
      }
      Promise.resolve(tasks[current]())
        .then((res) => {
          result[current] = res;
          if (current < n) {
            next();
          }
        })
        .catch((reason) => {
          result[current] = reason;
          if (current < n) {
            next();
          }
        });
    }
  });
}
(async () => {
  const result = await asyncPool_es6(
    [() => timeout(1), () => timeout(1), () => timeout(1), () => timeout(1)],
    2
  );
  console.log(result);
})();
