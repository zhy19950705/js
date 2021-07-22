import { unstable_batchedUpdates as batch } from "./utils/reactBatchedUpdates";
function createListenerCollection() {
  const batch = getBatch();
  let first = null;
  let last = null;
  return {
    /** 清除当前listeners的所有listener */
    clear() {
      first = null;
      last = null;
    },
    /** 派发更新 */
    notify() {
      batch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    /** 获取listeners的所有listener */
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    /** 接收订阅，将当前的callback（handleChangeWrapper）存到当前的链表中 */
    subscribe(callback) {
      let isSubscribed = true;
      let listener = (last = {
        callback,
        next: null,
        prev: last,
      });
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      /* 取消当前 handleChangeWrapper 的订阅*/
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    },
  };
}

/** 
 *  1收集订阅： 以链表的形式收集对应的 listeners  (每一个Subscription) 的handleChangeWrapper函数。
    2派发更新：, 通过 batch 方法( react-dom 中的  unstable_batchedUpdates ) 来进行批量更新。
 */
