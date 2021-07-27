const compose = require("./compose");

/** 返回增强版enhancer, 装饰器模式 */
function applyMiddleWare(...middleware) {
  return function enhancer(createStore) {
    return function newCreateStore(reducer) {
      const store = createStore(reducer);
      // 解构出原始的dispatch
      const { dispatch } = store;

      const chain = middleware.map((middleware) => middleware(store));
      const newDispatchChain = compose(...chain);
      // 将原始的dipatch传给func执行
      // 得到增强版的dispatch
      const newDispatch = newDispatchChain(dispatch);

      // 返回增强版dispatch
      return { ...store, dispatch: newDispatch };
    };
  };
}
module.exports = applyMiddleWare;
