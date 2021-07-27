/** 增强版dispatch */
function logger(store) {
  // next就是新的dispatch， 调用next等于调用下一个中间件
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.log("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      console.groupEnd();
      return result;
    };
  };
}
module.exports = logger;
