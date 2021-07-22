/**
 * 判断当前值是否能够呗JSON.stringify识别
 * @param data 需要判断的值
 * @returns 前参数是否可以string化
 */
export function canStringify(data: any): boolean {
  return ["undefined", "function", "symbol"].includes(typeof data);
}
