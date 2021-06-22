// 00101010101100001010010
// 0 010101010110  00   01010  010
function v1(str = "") {
  const length = str.length;
  if (length < 3) return -1;
  const arr = [];
  for (let i = 1; i < length; i++) {
    if (str[i] === "1" && str[i - 1] === "0") {
      for (let j = i + 1; j <= length - 1; j++) {
        if (str[j] === "0" && str[j + 1] === "0") {
          arr.push(str.substring(i - 1, j + 1));
          i = j + 1;
          break;
        } else if (str[j] === "0" && j === length - 1) {
          arr.push(str.substring(i - 1, j + 1));
          i = j + 1;
          break;
        }
      }
    }
  }
  console.log(arr);
  let max = "";
  for (let value of arr) {
    if (value.includes("11")) {
      continue;
    }
    if (value.length > max.length) {
      max = value;
    }
  }
  console.log(max);
  return max;
}
v1("000000111110011011010100101010101100001010010000");
