/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/length-of-last-word/
 */
 var lengthOfLastWord = function(s) {
    // let result = 0, str = ''
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] !== ' ') {
    //         str += s[i]
    //     }
    //     if (i === s.length - 1 && str !== '') {
    //         result = str.length
    //     }
    //     if (s[i] === ' ' && str !== '') {
    //         result = str.length
    //         str = ''
    //     }
    // }
    // return result
    let count = 0
    for (let i = s.length - 1;  i >= 0; i--) {
        if (s[i] === ' ' && count > 0) return count
        if (s[i] !== ' ') {
            count++
        }
    }
    return count
};