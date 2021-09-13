const array = [1, 2, 3, 4];
const reducer = (acc, cur) => acc + cur;
// console.log(array.reduce(reducer));

const inputs = [
  Promise.resolve(1),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  8,
];

async function main() {
  const result = await pReduce(inputs, async (a, b) => a + b, 0);
  console.log(result);
}
main();

/** 适用于需要根据异步资源计算累加值的场景。 */
async function pReduce(iterable, reducer, initialValue) {
  return new Promise((resolve, reject) => {
    const iterator = iterable[Symbol.iterator]();
    let index = 0;
    const next = async (total) => {
      const element = iterator.next();
      if (element.done) {
        resolve(total);
        return;
      }
      try {
        const [resolvedTotal, resolvedValue] = await Promise.all([
          total,
          element.value,
        ]);
        next(reducer(resolvedTotal, resolvedValue, index++));
      } catch (e) {
        reject(e);
      }
    };
    next(initialValue);
  });
}
