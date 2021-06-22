# [62. Unique Paths](https://leetcode.com/problems/unique-paths/)


## 题目

A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

Above is a 7 x 3 grid. How many possible unique paths are there?

**Note:** *m* and *n* will be at most 100.

**Example 1:**

    Input: m = 3, n = 2
    Output: 3
    Explanation:
    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Right -> Down
    2. Right -> Down -> Right
    3. Down -> Right -> Right

**Example 2:**

    Input: m = 7, n = 3
    Output: 28


## 题目大意

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径？


## 解题思路

- 这是一道简单的 DP 题。输出地图上从左上角走到右下角的走法数。
- 由于机器人只能向右走和向下走，所以地图的第一行和第一列的走法数都是 1，地图中任意一点的走法数是 `dp[i][j] = dp[i-1][j] + dp[i][j-1]`

优化：

我们在二维数组推导的时发现，dp[i][j]的值来自于dp[i - 1][j]和dp[i][j - 1]。
也就是只需要上一行的值就可以了，上上一行的并不需要了，所以这里可以用滚动数组的方式优化一下空间。
![](https://pic.leetcode-cn.com/1617607107-NtIBrT-c63984bf-74fe-487a-836d-ab3099b7fb4d.png)
以上图所述，对于第三行10这个值，需要上方的值+左方的值。而经过上一次计算之后，第四列的值是4。

此时我们并不需要再跟上一行的做累加，只需要用4加上左边的6就可以了。
所以我们可以申请一维数组，数组长度就是n。
将原先
dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
改为：
dp[j] = dp[j] + dp[j - 1]。

时间复杂度：O(M * N)

空间复杂度：O(N)