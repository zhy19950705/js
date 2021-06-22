const obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]() {
        let index = 0
        const self = this
        const keys = Object.keys(this)
        return {
            next() {
                if (index < keys.length) {
                    return {
                        value: self[keys[index++]],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
for (let value of obj) {
    console.log(value)
}