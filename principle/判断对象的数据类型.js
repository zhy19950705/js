const isType = (type) => (target) => `[object ${type}]` === Object.prototype.toString.call(target)
// const isType = type => {
//     return function (target) {
//         return `[object ${type}]` === Object.prototype.toString.call(target)
//     } 
// }

const isArray = isType('Array')
console.log('isArray', isArray([]))
/** 不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上,因为 call 始终会将第一个参数进行装箱操作，导致基本类型和包装类型无法区分 */

// const isType = (type, target) => `[object ${type}]` === Object.prototype.toString.call(target)
// console.log('isType', isType('Array', []))