/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (!cur[c]) {
      cur[c] = {};
      cur = cur[c];
    } else {
      cur = cur[c];
      continue;
    }
  }
  cur.end = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let c of word) {
    if (!cur[c]) {
      return false;
    } else {
      cur = cur[c];
    }
  }
  return !!cur.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let c of prefix) {
    if (!cur[c]) {
      return false;
    } else {
      cur = cur[c];
    }
  }
  return true;
};
