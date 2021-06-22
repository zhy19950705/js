function v1(pNum, wLen) {
  // 26员工, 1位字母, 26 / 26 = 1 => 1种排列组合 => 0-9，需要1位数
  // 260员工, 1位字母, 260 / 26 = 10 => 10种排列组合 0-9，需要1位数
  // 2600员工, 1位字母 => 2600 / 26 = 100 => 0-99 ,需要2位数
  let w = Math.pow(26, wLen);
  if (w > pNum) return 1;
  let number = pNum / w - 1; // 排列组合数
  //   console.log(number);
  if (number <= 1) {
    console.log(1, number);
    return 1;
  }
  let result = 0;
  while (number >= 1) {
    number = number / 10;
    result++;
  }
  console.log(result, number);
  return result;
}
v1(26, 1); // 1
v1(260, 1); // 1
v1(2600, 1); // 2
v1(999, 1); // 2
v1(261, 1); // 1
v1(2700, 1); // 3
v1(2700, 2); // 1
