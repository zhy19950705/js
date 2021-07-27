const tasks = [];
function* run() {
  let task;
  while ((task = task.shift())) {
    // 🔴 判断是否有高优先级事件需要处理, 有的话让出控制权
    if (hasHighPriorityEvent()) {
      yield;
    }
    // 处理完高优先级事件后，恢复函数调用栈，继续执行...
    excute(task);
  }
}
