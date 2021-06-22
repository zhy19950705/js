# [15. 3Sum](https://leetcode.com/problems/3sum/)

## 题目

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

```c
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## 题目大意

给定一个数组，要求在这个数组中找出 3 个数之和为 0 的所有组合。

## 解题思路
排序+双指针
1. 特判，对于数组长度 n，如果数组为 null 或者数组长度小于 3，返回 []。
2. 对数组进行排序。
3. 遍历排序后数组：
    + 若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果。
    + 对于重复元素：跳过，避免出现重复解
    + 令左指针 L=i+1，右指针 R=n-1，当 L < R 时，执行循环：
      - 当 nums[i] + nums[L] + nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R移到下一位置，寻找新的解
      - 若和大于 0，说明 nums[R] 太大，R 左移
      - 若和小于 0，说明 nums[L] 太小，L 右移






