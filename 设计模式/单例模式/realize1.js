function Universe() {
  // 判断是否存在实例
  if (typeof Universe.instance === "object") {
    return Universe.instance;
  }
  this.start_time = 0;
  this.bang = "Big";
  // 缓存
  Universe.instance = this;
}
const uni1 = new Universe();
const uni2 = new Universe();
console.log(uni1 === uni2);
