interface A {
  test: string;
}
interface A {
  // 不能重新声明
  // test: number
  testB: number;
}

const testA: A = {
  test: "",
  testB: 1,
};
