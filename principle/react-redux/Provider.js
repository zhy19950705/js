const { useMemo, useEffect } = require("react");

function Provider({ store, context, children }) {
  /** 利用useMemo，跟据store变化创建出一个contextValue 包含一个根元素订阅器和当前store  */
  const contextValue = useMemo(() => {
    /* 创建了一个根 Subscription 订阅器 */
    const subscription = new Subscripiton(store);
    /* subscription 的 notifyNestedSubs 方法 ，赋值给  onStateChange方法 */
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store,
      subscription,
    }; /*  store 改变创建新的contextValue */
  }, [store]);

  /*  获取更新之前的state值 ，函数组件里面的上下文要优先于组件更新渲染  */
  const previousState = useMemo(() => store.getState(), [store]);

  useEffect(() => {
    const { subscription } = contextValue;
    /* 触发trySubscribe方法执行，创建listeners */
    subscription.trySubscribe(); // 发起订阅
    if (previousState !== store.getState()) {
      /* 组件更新渲染之后，如果此时state发生改变，那么立即触发 subscription.notifyNestedSubs 方法  */
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe(); // 卸载订阅
      subscription.onStateChange = null;
    };
    /*  contextValue state 改变出发新的 effect */
  }, [contextValue, previousState]);

  const Context = context || ReactReduxContext;
  /*  context 存在用跟元素传进来的context ，如果不存在 createContext创建一个context,
  这里的ReactReduxContext就是由createContext创建出的context */
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

/** 
 *  1 首先创建一个 contextValue ，里面包含一个创建出来的父级 Subscription (我们姑且先称之为根级订阅器)和redux提供的store。
    2 通过react上下文context把 contextValue 传递给子孙组件。
 */
