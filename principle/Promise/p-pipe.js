/** 适用于把 promise-returning 或 async 函数组合成可复用的管道。 */
const addUnicorn = async (string) => `${string} Unicorn`;
const addRainbow = async (string) => `${string} Rainbow`;

async function pPipe(...functions) {
  if (functions.length === 0) {
    throw new Error("Expected at least one argument");
  }

  return async (input) => {
    let currentValue = input;

    for (const function_ of functions) {
      currentValue = await function_(currentValue); // eslint-disable-line no-await-in-loop
    }
    return currentValue;
  };
}

const pipeline = pPipe(addUnicorn, addRainbow);

(async () => {
  console.log(await pipeline("❤️")); // 输出结果：❤️ Unicorn Rainbow
})();
