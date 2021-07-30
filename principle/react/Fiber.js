const jsx = (
  <div id="a">
    <div id="b1"></div>
    <div id="b2"></div>
  </div>
);

const container = document.getElementById("root");

/**
 * 1. 为每一个节点构建 Fiber 对象
 * 2. 构建 Fiber 链表
 * 3. 提交 Fiber 链接
 */

// 创建根元素 Fiber 对象
const workInProgressRoot = {
  stateNode: container,
  props: {
    children: [jsx],
  },
};

let nextUnitOfWork = workInProgressRoot;
function workLoop(deadLine) {
  // 如果下一个要构建的执行单元存在并且浏览器有空余时间
  // 这个while循环会在任务执行完或者时间到了的时候结束
  while (nextUnitOfWork && deadLine.timeRemaining() > 0) {
    // 构建执行单元并返回新的执行单元
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  // 如果所有的执行单元都已经构建完成
  if (!nextUnitOfWork) {
    // 进入到第二个阶段 执行 DOM 操作
    commitRoot();
  } else {
    // 如果任务还没完，但是时间到了，我们需要继续注册requestIdleCallback
    requestIdleCallback(workLoop);
  }
}
// 在浏览器空闲的时候开始构建
requestIdleCallback(workLoop, {
  timeout,
});

/**
 * Fiber 工作的第一个阶段
 * performUnitOfWork用来执行任务，参数是我们的当前fiber任务，返回值是下一个任务
 * @param {Fiber} unitOfWork
 * @returns
 */
function performUnitOfWork(unitOfWork) {
  const current = unitOfWork.alternate;
  // 构建阶段向下走的过程
  // 1. 创建当前 Fiber 节点的 DOM 对象并存储在 stateNode 属性中
  // 2. 构建子级 Fiber 对象
  beginWork(fibee);
  // 如果子级存在
  if (fiber.child) {
    // 返回子级 构建子级的子级
    return fiber.child;
  }

  // 开始构建阶段向上走的过程
  // 如果父级存在
  while (fiber) {
    // 构建 Fiber 链表
    completeUnitOfWork(fiber);
    // 如果同级存在
    if (fiber.sibling) {
      // 返回同级 构建同级的子级
      return fiber.sibling;
    }
    // 同级不存在 退回父级 看父级是否有同级
    fiber = fiber.return;
  }
}
function beginWork(workInProgress) {
  // 如果 Fiber 对象没有存储其对应的 DOM 对象
  if (!workInProgress.stateNode) {
    // 创建 DOM 对象并存储在 Fiber 对象中
    workInProgress.stateNode = document.createElement(workInProgress.type);
    // 为 DOM 对象添加属性
    for (let attr in workInProgress.props) {
      if (attr !== "children") {
        workInProgress.stateNode[attr] = workInProgress.props[attr];
      }
    }
  }
  // 创建子级 Fiber 对象
  if (Array.isArray(workInProgress.props.children)) {
    // 记录上一次创建的子级 Fiber 对象
    let previousFiber = null;
    // 遍历子级
    workInProgress.props.children.forEach((child, index) => {
      // 创建子级 Fiber 对象
      let childFiber = {
        type: child.type,
        props: child.props,
        return: workInProgress,
        effectTag: "PLACEMENT",
      };
      // 第一个子级挂载到父级的 child 属性中
      if (index === 0) {
        workInProgress.child = childFiber;
      } else {
        // 其他子级挂载到自己的上一个兄弟的 sibling 属性中
        previousFiber.sibling = childFiber;
      }
      // 更新上一个子级
      previousFiber = childFiber;
    });
  }
}

function completeUnitOfWork(workInProgress) {
  let returnFiber = workInProgress.return;
  if (returnFiber) {
    // 链头上移
    if (!returnFiber.firstEffect) {
      returnFiber.firstEffect = workInProgress.firstEffect;
    }
    // lastEffect 上移
    if (!returnFiber.lastEffect) {
      returnFiber.lastEffect = workInProgress.lastEffect;
    }
    // 构建链表
    if (workInProgress.effectTag) {
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = workInProgress;
      } else {
        returnFiber.firstEffect = workInProgress;
      }
      returnFiber.lastEffect = workInProgress;
    }
  }
}

// Fiber 工作的第二阶段
function commitRoot() {
  // 获取链表中第一个要执行的 DOM 操作
  let currentFiber = workInProgressRoot.firstEffect;
  // 判断要执行 DOM 操作的 Fiber 对象是否存在
  while (currentFiber) {
    // 执行 DOM 操作
    currentFiber.return.stateNode.appendChild(currentFiber.stateNode);
    // 从链表中取出下一个要执行 DOM 操作的 Fiber 对象
    currentFiber = currentFiber.nextEffect;
  }
}
