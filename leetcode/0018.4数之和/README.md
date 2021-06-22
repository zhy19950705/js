# [18. 4Sum](https://leetcode.com/problems/4sum/)

## 题目

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

```c
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## 题目大意

给定一个数组，要求在这个数组中找出 4 个数之和为 0 的所有组合。


## 解题思路

使用两重循环分别枚举前两个数，然后在两重循环枚举到的数之后使用双指针枚举剩下的两个数。假设两重循环枚举到的前两个数分别位于下标 i 和 j，其中 i < j。初始时，左右指针分别指向下标 j+1 和下标 n-1。每次计算四个数的和，并进行如下操作：

如果和等于 target，则将枚举到的四个数加到答案中，然后将左指针右移直到遇到不同的数，将右指针左移直到遇到不同的数；

如果和小于 target，则将左指针右移一位；

如果和大于 target，则将右指针左移一位。

使用双指针枚举剩下的两个数的时间复杂度是 O(n)，因此总时间复杂度是 O(n^3)，低于 O(n^4)。

具体实现时，还可以进行一些剪枝操作：

1. 在确定第一个数之后，如果 nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target，说明此时剩下的三个数无论取什么值，四数之和一定大于 target，因此退出第一重循环；
2. 在确定第一个数之后，如果 nums[i] + nums[n-3] + nums[n-2] + nums[n-1] < target，说明此时剩下的三个数无论取什么值，四数之和一定小于 target，因此第一重循环直接进入下一轮，枚举 nums[i+1]；
3. 在确定前两个数之后，如果 nums[i] + nums[j] + [j+1] + nums[j+2] > target，说明此时剩下的两个数无论取什么值，四数之和一定大于 target，因此退出第二重循环；
4. 在确定前两个数之后，如果 nums[i] + nums[j] + nums [n-2] + nums[n-1] < target，说明此时剩下的两个数无论取什么值，四数之和一定小于 target，因此第二重循环直接进入下一轮，枚举 nums[j+1]。



