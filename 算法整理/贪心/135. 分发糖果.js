/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const length = ratings.length;
  const result = Array(length).fill(1);
  for (let i = 1; i < length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result[i] = result[i - 1] + 1;
    }
  }
  for (let i = length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      result[i] = Math.max(result[i], result[i + 1] + 1);
    }
  }
  return result.reduce((prev, cur) => prev + cur);
};
console.log(candy([1, 0, 2]));
