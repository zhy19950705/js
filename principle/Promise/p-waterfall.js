const pReduce = require("./p-reduce");
const tasks = [
  async (val) => val + 1,
  (val) => val + 2,
  async (val) => val + 2,
];

async function main() {
  const result = await pWaterfall(tasks, 0);
  console.dir(result);
}

/** 适用于串行执行 promise-returning 或 async 函数，并把前一个函数的返回结果自动传给下一个函数的场景。 */
async function pWaterfall(iterable, initialValue) {
  return pReduce(
    iterable,
    (previous, function_) => function_(previous),
    initialValue
  );
}
