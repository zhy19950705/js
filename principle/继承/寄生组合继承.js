function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = createObj(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}
function Parent() {
  this.name = "parent";
  this.play = [1, 2, 3];
}
Parent.prototype.getName = function () {
  return this.name;
};
function Child() {
  Parent.call(this);
  this.type = "child";
}
prototype(Child, Parent);
const child = new Child();

console.log(child); // Child { name: 'parent', play: [ 1, 2, 3 ], type: 'child' }
console.log(child.getName()); // paren
