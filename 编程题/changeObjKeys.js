console.log(
  change({
    UserName: "toutiao",
    Group: {
      groupName: "douyin",
      Company: {
        name: "bytedance",
      },
    },
  })
);
function changeKey(key) {
  return key.split("").reduce((prev, cur, index) => {
    if (cur.toUpperCase() === cur) {
      if (index === 0) {
        cur = cur.toLowerCase();
      } else {
        cur = "_" + cur.toLowerCase();
      }
    }
    return prev + cur;
  }, "");
}
function change(obj) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof obj[key] === "object") {
      change(obj[key]);
    }
    const newKey = changeKey(key);
    if (newKey === key) continue;
    obj[newKey] = obj[key];
    delete obj[key];
  }
  return obj;
}
