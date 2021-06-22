# [78. Subsets](https://leetcode.com/problems/subsets/)


## 题目

Given a set of **distinct** integers, *nums*, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

    Input: nums = [1,2,3]
    Output:
    [
      [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
      []
    ]


## 题目大意

给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。说明：解集不能包含重复的子集。


## 解题思路

![](https://pic.leetcode-cn.com/d8e07f0c876d9175df9f679fcb92505d20a81f09b1cb559afc59a20044cc3e8c-%E5%AD%90%E9%9B%86%E9%97%AE%E9%A2%98%E9%80%92%E5%BD%92%E6%A0%91.png)

观察上图可得，选择列表里的数，都是选择路径(红色框)后面的数，比如[1]这条路径，他后面的选择列表只有"2、3"，[2]这条路径后面只有"3"这个选择，那么这个时候，就应该使用一个参数start，来标识当前的选择列表的起始位置。也就是标识每一层的状态，因此被形象的称为"状态变量",

