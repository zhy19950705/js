/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let h = mat.length,
    w = mat[0].length;
  if (h * w !== r * c) return mat;
  let arr = [];
  mat.forEach((row) => {
    arr.push(...row);
  });
  const result = Array(r)
    .fill(0)
    .map((_, index) => arr.slice(index * c, (index + 1) * c));
  return result;
};
