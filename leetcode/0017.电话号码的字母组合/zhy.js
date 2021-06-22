/** 回溯
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const wordMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const usedWords = [];
  digits = digits.split("").reverse().join("");
  for (let word of digits) {
    usedWords.push(wordMap[word]);
  }
  console.log(usedWords);
  const result = [];
  function dfs(path, index) {
    if (path.length === digits.length) {
      return result.push([...path].reverse().join(""));
    }
    for (let i = 0; i < usedWords[index].length; i++) {
      path.push(usedWords[index][i]);
      dfs(path, index + 1);
      path.pop();
    }
  }
  dfs([], 0);
  console.log(result);
  return result;
};
letterCombinations("23");
