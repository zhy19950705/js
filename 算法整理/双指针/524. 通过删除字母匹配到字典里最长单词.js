/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 * https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/
 * 双指针暴力查找
 */
 var findLongestWord_v1 = function(s, dictionary) {
    let max = ''
    for (const str of dictionary) {
        let p0 = 0, p1 = 0
        while (p0 < s.length && p1 < str.length) {
            if (s[p0] === str[p1]) {
                p1++
            }
            p0++
        }
        if (p1 === str.length) {
            if (str.length > max.length || (str.length === max.length && str < max)) {
                max = str
            }
        }
    }
    return max
};

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 * 排序后找到第一个符合子序列的
 */
 var findLongestWord_v2 = function(s, dictionary) {
    dictionary.sort((word1, word2) => {
        if (word1.length !== word2.length) {
            return word2.length - word1.length
        } else {
            return word1.localeCompare(word2)
        }
    })

    for (const t of dictionary) {
        let i = 0, j = 0
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                i++
            }
            j++
        }
        if (i === t.length) {
            return t
        }
    }
    return ''
};