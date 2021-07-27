function createStore(reducer, preloadState, enhancer) {
  if (typeof preloadState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadState;
    preloadState = undefined;
  }
  // 返回一个新的createStore，再次执行createStore
  if (typeof enhancer === "function") {
    return enhancer(createStore)(reducer, preloadState);
  }
  let state; // state记录所有状态
  let listeners = []; // 保存所有注册的回调

  // 将回调保存下来
  function subscribe(callback) {
    listeners.push(callback);
  }

  // dispatch将所有回调拿出来执行
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  // getState直接返回state
  function getState() {
    return state;
  }

  // store包装一下前面的方法直接返回
  const store = {
    subscribe,
    dispatch,
    getState,
  };

  return store;
}
module.exports = createStore;
