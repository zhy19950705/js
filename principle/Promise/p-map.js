const delay = require("./delay");
const inputs = [200, 100, 50];
const mapper = (value) => delay(value, { value });

async function main() {
  console.time("start");
  const result = await pMap(inputs, mapper, { concurrency: 2 });
  console.dir(result); // 输出结果：[ 200, 100, 50 ]
  console.timeEnd("start");
}
main();

async function pMap(
  iterable,
  mapper,
  { concurrency = Number.POSITIVE_INFINITY, stopOnError = true } = {}
) {
  return new Promise((resolve, reject) => {
    // 省略参数校验代码
    const result = []; // 存储返回结果
    const errors = []; // 存储异常对象
    const skippedIndexes = []; // 保存跳过项索引值的数组
    const iterator = iterable[Symbol.iterator](); // 获取迭代器
    let isRejected = false; // 标识是否出现异常
    let isIterableDone = false; // 标识是否已迭代完成
    let resolvingCount = 0; // 正在处理的任务个数
    let currentIndex = 0; // 当前索引

    const next = () => {
      if (isRejected) {
        // 若出现异常，则直接返回
        return;
      }

      const nextItem = iterator.next(); // 获取下一项
      const index = currentIndex; // 记录当前的索引值
      currentIndex++;

      if (nextItem.done) {
        // 判断迭代器是否迭代完成
        isIterableDone = true;

        // 判断是否所有的任务都已经完成了
        if (resolvingCount === 0) {
          if (!stopOnError && errors.length > 0) {
            // 异常处理
            reject(new AggregateError(errors));
          } else {
            for (const skippedIndex of skippedIndexes) {
              // 删除跳过的值，不然会存在空的占位
              result.splice(skippedIndex, 1);
            }
            resolve(result); // 返回最终的处理结果
          }
        }
        return;
      }

      resolvingCount++; // 正在处理的任务数加1

      (async () => {
        try {
          const element = await nextItem.value;

          if (isRejected) {
            return;
          }

          // 调用mapper函数，进行值进行处理
          const value = await mapper(element, index);
          // 处理跳过的情形，可以在mapper函数中返回pMapSkip，来跳过当前项
          // 比如在异常捕获的catch语句中，返回pMapSkip值
          if (value === pMapSkip) {
            // pMapSkip = Symbol("skip")
            skippedIndexes.push(index);
          } else {
            result[index] = value; // 把返回值按照索引进行保存
          }

          resolvingCount--;
          next(); // 迭代下一项
        } catch (error) {
          if (stopOnError) {
            // 出现异常时，是否终止，默认值为true
            isRejected = true;
            reject(error);
          } else {
            errors.push(error);
            resolvingCount--;
            next();
          }
        }
      })();
    };

    // 根据配置的concurrency值，并发执行任务
    for (let index = 0; index < concurrency; index++) {
      next();
      if (isIterableDone) {
        break;
      }
    }
  });
}

const pMapSkip = Symbol("skip");

module.exports = {
  pMapSkip,
  pMap,
};
