/** 适用于串行执行 promise-returning 或 async 函数的场景 */

const tasks = [async () => 1 + 1, () => 2 + 2, async () => 3 + 3];

async function main() {
  const result = await pSeries(tasks);
  console.dir(result);
}
main();

async function pSeries(tasks) {
  for (let func of tasks) {
    if (typeof func !== "function") {
      throw new TypeError("");
    }
  }
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}
