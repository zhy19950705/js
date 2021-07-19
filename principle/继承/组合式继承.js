function Parent(name) {
  this.name = name;
  this.play = [1, 2, 3];
}
Parent.prototype.getName = function () {
  return this.name;
};
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
let child1 = new Child("why", 1);
child1.play.push(4);
let child2 = new Child("zhy", 2);
console.log(child2.play);
// 缺点
// Parent会执行两次，增加性能开销
