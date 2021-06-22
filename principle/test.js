let a = {
  why: 'why',
  [Symbol('zhy')]: 'zhy'
}
Object.prototype.test = 'test'
Reflect.defineProperty(a, 'why', {
  enumerable: false
})
for (let key in a) {
  console.log(key)
}
console.log(Object.keys(a))
console.log(Reflect.ownKeys(a))
Obc