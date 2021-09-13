// 修复了 Promise.race API 一个 “愚蠢” 的行为。

const delay = require("./delay");

// 当使用空的可迭代对象，调用 Promise.race API 时，将会返回一个永远处于 pending 状态的 Promise 对象，这可能会产生一些非常难以调试的问题。
const inputs = [delay(200, { value: 1 }), delay(100, { value: 2 })];

async function main() {
  const result = await pRace(inputs);
  console.dir(result);
}
main();

async function pRace(iterable) {
  if (iterable.length === 0) {
    throw new RangeError("Expected the iterable to contain at least one item");
  }
  return Promise.race(iterable);
}
