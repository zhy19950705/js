export {}; // 解决扩展全局属性问题

/**
 * 声明window里用户新增的属性，让ts编译通过
 */
//  declare与declare global它们功能是一样的。在d.ts中，使用declare与declare global两个作用是相等的。
declare global {
  interface window {
    test: string;
  }
}
