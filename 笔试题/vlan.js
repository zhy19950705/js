function v1(str = "", value) {
  value = parseInt(value);
  const arr = [];
  str.split(",").forEach((item) => {
    if (item.includes("-")) {
      const [start, end] = item.split("-").map((v) => parseInt(v));
      for (let i = start; i <= end; i++) {
        if (!arr.includes(i)) {
          arr.push(i);
        }
      }
    } else {
      arr.push(parseInt(item));
    }
  });
  arr.sort((a, b) => a - b);
  if (arr.includes(parseInt(value))) {
    arr.splice(arr.indexOf(value), 1);
  }
  let temp = [];
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (temp.length === 0) {
      temp.push(arr[i]);
    } else if (arr[i] - temp[temp.length - 1] === 1) {
      temp.push(arr[i]);
    } else {
      if (temp.length > 1) {
        result.push(temp[0] + "-" + temp[temp.length - 1]);
      } else {
        result.push(temp[0].toString());
      }
      temp = [arr[i]];
    }
  }
  result = result.join(",");
  return result;
}
v1("20-21,15,18,30,5-10", "6");
v1("20-21,15,18,30,5-10", "15");
v1("20-21,15,18,30,5-10", "20");
v1("5,1-3", "10");
v1("5,1-3", "2");
v1("5,1-3", "1");
