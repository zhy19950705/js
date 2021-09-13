function delay(time, options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(options.value);
    }, time);
  });
}
module.exports = delay;
