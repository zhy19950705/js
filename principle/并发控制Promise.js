function fetchImage(url) {
  // 模拟请求的响应时间在0 - 1s之间随机
  const timeCost = Math.random() * 1000;
  return new Promise((resolve) => setTimeout(resolve, timeCost, "get: " + url));
}
// 待请求的图片
const imageUrls = [
  "pic_1.png",
  "pic_2.png",
  "pic_3.png",
  "pic_4.png",
  "pic_5.png",
  "pic_6.png",
];

function fetchWithLimit(arr, limit) {
  const urls = [...arr];
  let rs = new Map();
  function run() {
    if (urls.length > 0) {
      const url = urls.shift();
      console.log(url, ' [start at] ', ( new Date()).getTime() % 10000)
      return fetchImage(url).then((res) => {
        console.log(url, " [end at] ", new Date().getTime() % 10000);
        rs.set(url, res);
        return run();
      });
    }
  }
  const promiseList = Array(Math.min(limit, imageUrls.length))
    .fill(Promise.resolve())
    .map((promise) => promise.then(run));
  return Promise.all(promiseList).then(() =>
    imageUrls.map((item) => rs.get(item))
  );
}

fetchWithLimit(imageUrls, 2)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
