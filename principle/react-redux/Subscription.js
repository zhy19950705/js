export default class Subscription {
  constructor(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null; // 取消订阅
    this.listeners = null;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }
  /** 负责检测是否该组件订阅，然后添加订阅者也就是listener */
  addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  }
  /** 向listeners发布通知 */
  notifyNestedSub() {
    this.listeners.notify();
  }
  /** 对于 provide onStateChange 就是 notifyNestedSubs 方法，
   * 对于 connect 包裹接受更新的组件 ，onStateChange 就是 负责更新组件的函数  */
  handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  }
  /** 判断有没有开启订阅 */
  isSubscribed() {
    return Boolean(this.unsubscribe);
  }
  /** 开启订阅模式 首先判断当前订阅器有没有父级订阅器 ，
   * 如果有父级订阅器(就是父级Subscription)，把自己的handleChangeWrapper放入到监听者链表中
   * */
  trySubscribe() {
    /* parentSub  即是provide value 里面的 Subscription 这里可以理解为 父级元素的 Subscription */
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub
        ? this.parentSub.addNestedSub(this.handleChangeWrapper)
        : /* provider的Subscription是不存在parentSub，所以此时trySubscribe 就会调用 store.subscribe   */
          this.store.subscribe(this.handleChangeWrapper);
    }
  }
  /** 取消订阅 */
  tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = null;
    }
  }
}
