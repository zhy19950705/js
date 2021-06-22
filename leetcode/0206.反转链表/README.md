# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)

## 题目

Reverse a singly linked list.

## 题目大意

翻转单链表


## 解题思路

假设存在链表 1 → 2 → 3 → ∅，我们想要把它改成 ∅←1←2←3。

在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！