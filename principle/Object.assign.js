Object.assign_v1 = function () {
  const target = Array.prototype.shift.call(arguments);
  const source = Array.from(arguments);
  if (target == undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  let result = Object.create(target);
  source.forEach((obj) => {
    if (obj != null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
      }
    }
  });
  return result;
};
let a = { a: 1 };
let b = { b: 2, c: { d: 3 } };
let c = Object.assign_v1({}, a, b);
b.c.d = 4;
console.log(c);
