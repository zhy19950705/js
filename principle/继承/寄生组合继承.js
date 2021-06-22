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
function clone(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}