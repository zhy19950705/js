function Universe() {
  // 缓存实例
  let instance;
  // 重新构造函数
  Universe = function Universe() {
    return instance;
  };
  // 后期处理原型属性
  Universe.prototype = this;
  // 实例
  instance = new Universe();
  // 重设构造函数指针
  instance.constructor = Universe;

  instance.start_time = 0;
  instance.bang = "big";

  return instance;
}
const uni1 = new Universe();
const uni2 = new Universe();
console.log(uni1 === uni2);

Universe.prototype.nothing = true;
const uni3 = new Universe();
Universe.prototype.everything = true;
const uni4 = new Universe();
console.log(uni3.nothing);
console.log(uni4.nothing);
console.log(uni3.everything);
console.log(uni4.everything);
console.log(uni1.constructor === Universe);
