/**
 * @param {number} number
 * 要注意的是这个函数在没有指定区域的基本使用时，返回使用默认的语言环境和默认选项格式化的字符串，
 * 所以不同地区数字格式可能会有一定的差异。最好确保使用 locales 参数指定了使用的语言。
 */
function v1(number) {
  return number.toLocaleString("en-IN");
}

console.log(v1(12345678.12345));

/**
 * @param {number} number
 */
function v2(number) {
  const nums = number.toString().split(".");
  let left = nums[0].split("").reverse();
  let arr = [];
  let result = "";
  for (let i = 0; i < left.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      arr.push(",");
    }
    arr.push(left[i]);
  }
  arr.reverse();
  if (nums[1]) {
    result = arr.join("").concat("." + nums[1]);
  } else {
    result = arr.join("");
  }
  return result;
}
console.log(v2(12345678.12345));

/**
 * @param {number} number
 * @returns
 */
function v3(number) {
  return number.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  });
}
console.log(v3(12345678.12345));
