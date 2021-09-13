const fs = require("fs");
const path = require("path");
fs.readFile("/Volumes/code/suanfa/编程题/lazyMan.js", {}, (err, res) => {
  console.log(err, res);
});

// 实现promiseFn
async function test() {
  const asyncReadFile = promiseFn(fs.readFile);
  const res = await asyncReadFile("/Volumes/code/suanfa/编程题/lazyMan.js");
  console.log(res);
}
test();

function promiseFn(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };
}
