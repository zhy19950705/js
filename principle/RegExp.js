function trim(str = "") {
  // 注意：/^\s\s*/ 效率比 /^\s+/ 高，因为后者假设字符串开头至少存在一个空白符
  return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}

/**
 * 是否符合美元格式
 * $开头
 * 1～3个数字开头且第一个数字不为0，或者1个数字开头
 * 中间0～n个,加3个数字组合
 * 没有小数，或者以.加两位数字结尾
 */
function isUSD(str = "") {
  return new RegExp(/^\$([1-9]{1}\d{1,2}|\d)(,\d{3})*(\.\d{2})?$/).test(str);
}

/**
 * 获取url参数
 */
function getUrlParams(url = "") {
  const qs = require("qs");
  // if (url) {
  //   url = url.substr(url.indexOf("?") + 1); //字符串截取，比我之前的split()方法效率高
  // }
  // var result = {}, //创建一个对象，用于存name，和value
  //   queryString = url || location.search.substring(1), //location.search设置或返回从问号 (?) 开始的 URL（查询部分）。
  //   re = /([^&=]+)=([^&]*)/g, //正则，具体不会用
  //   m;
  // while ((m = re.exec(queryString))) {
  //   //exec()正则表达式的匹配，具体不会用
  //   result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]); //使用 decodeURIComponent() 对编码后的 URI 进行解码
  // }
  // return result;
  return qs.parse(url);
}

console.log(getUrlParams("?test=1&b=2"));
