const obj = {
    name: 'parent',
    getName: function () {
        return this.name
    },
    ages: [1, 2]
}
const child = Object.create(obj)
child.name = 'child'

const son = Object.create(obj)
son.ages.push(3)

console.log(child.ages, son.ages)