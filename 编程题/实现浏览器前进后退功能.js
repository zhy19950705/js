let forwardStack = []
let backStack = []
const newSite = (record) => {
    forwardStack.push(record)
}
const forward = (record) => {
    backStack.push(record)
    forwardStack.pop()
}
const back = (record) => {
    backStack.pop()
    forwardStack.push(record)
}