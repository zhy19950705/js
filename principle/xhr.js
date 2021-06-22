function request({
  url,
  method = "get",
  data,
  headers = [],
  onprogress = (e) => e,
  requestList,
}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.upload.onprogress = onprogress;
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
    xhr.onload = (e) => {
      if (requestList) {
        const xhrIndex = requestList.findIndex((item) => item === xhr);
        requestList.splice(xhrIndex, 1);
      }
      resolve({
        data: e.target.response,
      });
    };
    requestList && requestList.push(xhr);
  });
}

/**
 * fetch支持中断
 */
const controller = new AbortController();
const signal = controller.signal;
fetch("https://slowmo.glitch.me/5000", {
  signal,
})
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.error("Fetch was aborted");
    } else {
      console.error("Error", err);
    }
  });
setTimeout(() => {
  controller.abort();
}, 4000);
