function Parent() {
    this.name = 'parent'
}
Parent.prototype.getName = function () {
    return this.name
}
function Child() {
    Parent.call(this)
    this.type = 'child'
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
const child = new Child()
console.log(child.name)
console.log(child.getName())