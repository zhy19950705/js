// 有了Readonly，可以声明更加严谨的可读属性，亦或者变量。

// 在ES6当中，可以通过const进行常量量声明，切声明后不可修改，如果进行修改的话会直接Cannot assign to 'a' because it is a constant.进行异常抛错。

// 虽然不能更改整个值，但是如果值是一个引用类型的话，依旧可以对其内部的属性进行修改。那么从只读的概念上来说，显然不具备当前的能力。

// 而使用Typescript当中的readonly关键字对属性或者是变量进行声明，那么将会在编译时就发出告警。那么在声明部分
const a: {
  readonly name: string;
} = {
  name: "zhy",
};
