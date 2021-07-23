// 假设本地机器无法做加减乘除运算，需要通过远程请求让服务端来实现。
// 以加法为例，现有远程API的模拟实现

const addRemote = async (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
  });

const cache = {};
// 请实现本地的add方法，调用addRemote，能最优的实现输入数字的加法。
async function add(...inputs) {
  // 你的实现
  const n = inputs.length;
  // debugger;
  if (n <= 1) return inputs[0];
  const promiseList = [];
  for (let i = 0; i * 2 < n - 1; i++) {
    const key1 = `${inputs[i * 2]}_${inputs[i * 2 + 1]}`;
    const key2 = `${inputs[i * 2 + 1]}_${inputs[i * 2]}`;
    const cacheVal = cache[key1] || cache[key2];
    if (cacheVal) {
      promiseList.push(Promise.resolve(cacheVal));
    } else {
      const addPromise = addRemote(inputs[i * 2], inputs[i * 2 + 1]);
      cache[key1] = addPromise;
      promiseList.push(addPromise);
    }
  }
  if (n % 2) {
    const promise = Promise.resolve(inputs[n - 1]);
    promiseList.push(promise);
  }
  return Promise.all(promiseList).then((results) => {
    return add(...results);
  });
}

console.time("1");
// 请用示例验证运行结果:
add(1, 2, 3, 4, 1, 2, 3, 7).then((result) => {
  console.log(result); // 3
  console.timeEnd("1");
  console.time("2");
  add(1, 2).then((result) => {
    console.log(result); // 10
    console.timeEnd("2");
  });
});
