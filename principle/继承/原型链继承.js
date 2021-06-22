function Parent(name = 'why') {
    this.name = 'why'
    this.age = [1, 2]
}
function Child() {
    this.child = true
}
Child.prototype = new Parent()
const child1 = new Child()
const child2 = new Child('zhy')
child1.age.push(3)
console.log(child1.age)
console.log(child2.age)