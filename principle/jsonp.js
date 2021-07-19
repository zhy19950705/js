// JSONP 核心原理：script 标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于 GET 请求；

function jsonp({ url, params, callbackName }) {
  function generateUrl() {
    let dataUrl = "";
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataUrl += `${key}=${params[key]}&`;
      }
    }
    dataUrl += `callbackName=${callbackName}`;
    return `${url}?${dataUrl}`;
  }
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement("script");
    scriptEle.src = generateUrl();
    document.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
}
