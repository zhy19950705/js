function Animal() {
  this.colors = ["black", "white"];
}
Animal.prototype.getColor = function () {
  return this.colors;
};
function Dog() {}
Dog.prototype = new Animal();

let dog1 = new Dog();
dog1.colors.push("brown");
let dog2 = new Dog();
console.log(dog2.colors);

// 原型链继承存在的问题：

// 问题1：
// 问题2：子类在实例化的时候不能给父类构造函数传参；
