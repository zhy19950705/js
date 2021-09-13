const delay = require("./delay");
const { pMap } = require("./p-map");

// 适用于并发执行 promise-returning 或 async 函数的场景
const inputs = [
  () => delay(200, { value: 1 }),
  async () => {
    await delay(100, { value: 2 });
    return 2;
  },
  async () => 8,
];

async function main() {
  console.time("start");
  const result = await pAll(inputs, { concurrency: 1 });
  console.dir(result);
  console.timeEnd("start");
}
main();

async function pAll(iterable, options) {
  return pMap(iterable, (element) => element(), options);
}
