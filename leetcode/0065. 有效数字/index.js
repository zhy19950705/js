var isNumber = function (s) {
  /** 状态 */
  const State = {
    /** 初始状态 */
    STATE_INITIAL: "STATE_INITIAL",
    /** 整数符号 +- 状态 */
    STATE_INT_SIGN: "STATE_INT_SIGN",
    /** 整数数字状态 */
    STATE_INTEGER: "STATE_INTEGER",
    /** 左侧有整数的小数点符号 . 状态 */
    STATE_POINT: "STATE_POINT",
    /** 左侧无整数的小数点符号 . 状态 */
    STATE_POINT_WITHOUT_INT: "STATE_POINT_WITHOUT_INT",
    /** 小数数字状态 */
    STATE_FRACTION: "STATE_FRACTION",
    /** 指数符号 e 状态 */
    STATE_EXP: "STATE_EXP",
    /** 指数符号 +- 状态*/
    STATE_EXP_SIGN: "STATE_EXP_SIGN",
    /** 指数数字 */
    STATE_EXP_NUMBER: "STATE_EXP_NUMBER",
    /** 结束状态 */
    STATE_END: "STATE_END", // 并没有用到
  };

  /** 字符类型 */
  const CharType = {
    /** 数 0～9 */
    CHAR_NUMBER: "CHAR_NUMBER",
    /** 指数 e */
    CHAR_EXP: "CHAR_EXP",
    /** 小数点 . */
    CHAR_POINT: "CHAR_POINT",
    /** 符号 +- */
    CHAR_SIGN: "CHAR_SIGN",
    /** 非法的 */
    CHAR_ILLEGAL: "CHAR_ILLEGAL",
  };

  /** 转换字符类型
   * @param ch当前字符
   * @returns CharType
   */
  const toCharType = (ch) => {
    // isNaN 为数字则为false。
    //  isNaN 字符串(除“”和纯数字字符串)也为true,
    // 没赋值 true
    if (!isNaN(ch)) {
      return CharType.CHAR_NUMBER;
    } else if (ch.toLowerCase() == "e") {
      return CharType.CHAR_EXP;
    } else if (ch == ".") {
      return CharType.CHAR_POINT;
    } else if (ch == "+" || ch == "-") {
      return CharType.CHAR_SIGN;
    } else {
      return CharType.CHAR_ILLEGAL;
    }
  };

  /** 总转移状态Map */
  const transfer = new Map();

  /** 初始转移状态Map */
  const initialMap = new Map();
  initialMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER); // 初始状态=>(数值)=>整数状态
  initialMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT); // 初始状态=>(小数点)=>左侧无整数小数点状态
  initialMap.set(CharType.CHAR_SIGN, State.STATE_INT_SIGN); // 初始状态=>(符号+-)=>符号状态
  // 总：初始状态=>初始转移状态Map
  transfer.set(State.STATE_INITIAL, initialMap);

  /** 有符号状态Map */
  const intSignMap = new Map();
  intSignMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER); // 有符号状态=>(数字)=>整数状态
  intSignMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT); // 有符号状态=>(小数点)=>左侧无整数小数点状态
  // 总：符号状态=>有符号状态Map
  transfer.set(State.STATE_INT_SIGN, intSignMap);

  /** 整数状态Map */
  const integerMap = new Map();
  integerMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER); // 整数状态=>(数字)=>整数状态
  integerMap.set(CharType.CHAR_EXP, State.STATE_EXP); // 整数状态=>(指数e)=>指数e状态
  integerMap.set(CharType.CHAR_POINT, State.STATE_POINT); // 整数状态=>(小数点.)=>左侧有整数小数点状态
  // 总：整数状态=>整数状态Map
  transfer.set(State.STATE_INTEGER, integerMap);

  /** 左侧有整数小数点Map状态 */
  const pointMap = new Map();
  pointMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION); // 左侧有整数小数点M状态=>(数字)=>小数状态
  pointMap.set(CharType.CHAR_EXP, State.STATE_EXP); // 左侧有整数小数点M状态=>(指数e)=>指数e状态
  // 总：左侧有整数小数点状态=>左侧有整数小数点Map状态
  transfer.set(State.STATE_POINT, pointMap);

  /** 左侧无整数小数点Map状态 */
  const pointWithoutIntMap = new Map();
  pointWithoutIntMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION); // 左侧无整数小数点状态=>(数字)=>小数状态
  // 总：左侧无整数小数点状态=>左侧无整数小数点Map状态
  transfer.set(State.STATE_POINT_WITHOUT_INT, pointWithoutIntMap);

  /** 小数Map状态 */
  const fractionMap = new Map();
  fractionMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION); // 小数状态=>(数字)=>小数状态
  fractionMap.set(CharType.CHAR_EXP, State.STATE_EXP); // 小数状态=>(指数e)=>指数e状态
  // 总：小数状态=>小数Map状态
  transfer.set(State.STATE_FRACTION, fractionMap);

  /** 指数e Map状态 */
  const expMap = new Map();
  expMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER); //指数e状态=>(数字)=>指数数字状态
  expMap.set(CharType.CHAR_SIGN, State.STATE_EXP_SIGN); //指数e状态=>(符号+-)=>指数符号+-状态
  // 总：指数e状态=>指数e Map状态
  transfer.set(State.STATE_EXP, expMap);

  /** 指数符号+- Map状态 */
  const expSignMap = new Map();
  expSignMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER); // 指数符号+-状态=>(数字)=>指数数字状态
  // 总：指数符号+-状态=>指数符号+- Map状态
  transfer.set(State.STATE_EXP_SIGN, expSignMap);

  /** 指数数字 Map状态 */
  const expNumberMap = new Map();
  expNumberMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER); // 指数数字状态=>(数字)=>指数数字状态
  // 总：指数数字状态=>指数数字 Map状态
  transfer.set(State.STATE_EXP_NUMBER, expNumberMap);

  const len = s.length;
  // 从初始状态出发
  let state = State.STATE_INITIAL;

  for (let i = 0; i < len; i++) {
    // 获取当前字符类型
    const type = toCharType(s[i]);
    if (!transfer.get(state).has(type)) {
      return false;
    } else {
      state = transfer.get(state).get(type);
    }
  }

  // 返回state是否为有效状态
  return (
    state == State.STATE_INTEGER ||
    state == State.STATE_POINT ||
    state == State.STATE_FRACTION ||
    state == State.STATE_EXP_NUMBER ||
    state == State.STATE_END
  );
};
