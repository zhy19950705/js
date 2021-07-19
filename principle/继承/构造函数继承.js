function Parent() {
  this.name = "parent";
}
Parent.prototype.getName = function () {
  return this.name;
};

function Child() {
  Parent.call(this);
  this.type = "child";
}
const child = new Child();
console.log(child.name);
console.log(child.getName());

// 优点
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参
// 缺点
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法。
// 它使父类的引用属性不会被共享，优化了第一种继承方式的弊端；但是随之而来的缺点也比较明显——只能继承父类的实例属性和方法，不能继承原型属性或者方法。
