const url = "https://why?double=1&double=2&noValue&single=1";
function parseParam(url) {
  const paramStr = /.+\?(.+)$/.exec(url)[1];
  const paramArr = paramStr.split("&");
  const paramObj = {};
  paramArr.forEach((param) => {
    if (/=/.test(param)) {
      let [key, val] = param.split("=");
      val = decodeURIComponent(val);
      if (paramObj.hasOwnProperty(key)) {
        paramObj[key] = [].concat(paramObj[key], val);
      } else {
        paramObj[key] = val;
      }
    } else {
      paramObj[param] = true;
    }
  });
  return paramObj;
}
console.log(parseParam(url));
