function createElement(type, props, ...children) {
  props = {
    ...props,
    children,
  };
  return ReactElement(type, key, props);
}
const ReactElement = () => {};

function render(vDom, container) {
  let dom;
  // 检查当前节点是文本还是对象
  if (typeof vDom !== "object") {
    dom = document.createTextNode(vDom);
  } else {
    dom = document.createElement(vDom.type);
  }
  // 将vDom上除了children外的属性都挂载到真正的DOM上去
  if (vDom.props) {
    Object.keys(vDom.props).forEach((key) => {
      if (key !== "prop") {
        dom[key] = vDom.props[key];
      }
    });
  }
  if (vDom.props && vDom.props.children && vDom.props.children.length) {
    vDom.props.children.forEach((child) => render(child, dom));
  }
  container.appendChild(dom);
}
