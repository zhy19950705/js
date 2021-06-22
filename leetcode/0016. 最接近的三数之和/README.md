# [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/)

## 题目

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

```c
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

## 题目大意

给定一个数组，要求在这个数组中找出 3 个数之和离 target 最近。

## 解题思路
排序+双指针
1. 对数组进行排序。
2. 初始化result = nums[0] + nums[1] + nums[2]
3. 遍历排序后数组：
   1. 令左指针left = i + 1, 右指针right = length - 1, 当left < right时，执行循环
   2. 判断target和result,sum之间绝对距离，更新result为绝对值更小的
   3. 若sum === target，结束循环，返回sum
   4. 若sum < target, 说明nums[left]太小，left右移
   5. 若sum > target, 说明nums[right]太大，right左移


暴力循环O(n^3)