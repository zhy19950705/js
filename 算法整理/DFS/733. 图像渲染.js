/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * https://leetcode-cn.com/problems/flood-fill/ 岛屿问题
 */
var floodFill = function (image, sr, sc, newColor) {
  const w = image[0].length,
    h = image.length,
    prev = image[sr][sc];
  function dfs(r, c) {
    if (!inArea(r, c)) return;
    if (image[r][c] === newColor) return;
    if (image[r][c] === prev) {
      image[r][c] = newColor;
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }
  }
  dfs(sr, sc);
  function inArea(r, c) {
    return r >= 0 && c >= 0 && c < w && r < h;
  }
  return image;
};
