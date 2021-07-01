/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const result = [];
  while (columnNumber > 0) {
    columnNumber--;
    result.unshift(String.fromCharCode((columnNumber % 26) + "A".charCodeAt()));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result.join("");
};
