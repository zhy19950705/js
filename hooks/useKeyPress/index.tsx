import { useEffect, useRef } from "react";
import { BasicTarget, getTargetElement } from "../utils/dom";

export type KeyPredicate = (event: KeyboardEvent) => boolean;
export type KeyType = KeyboardEvent["key"];
export type KeyFilter =
  | KeyType
  | Array<KeyType>
  | ((event: KeyboardEvent) => boolean);
export type EventHandler = (event: KeyboardEvent) => void;
export type KeyEvent = "keydown" | "keyup";

export type Target = BasicTarget<HTMLElement | Document | Window>;

export type EventOption = {
  events?: Array<KeyEvent>;
  target?: Target;
};

// 键盘事件 keyCode 别名
const aliasKeyCodeMap: any = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46],
};

// 键盘事件 key 别名
const aliasKeyMap: any = {
  esc: "Escape",
  tab: "Tab",
  enter: "Enter",
  space: " ",
  // IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ["Up", "ArrowUp"],
  left: ["Left", "ArrowLeft"],
  right: ["Right", "ArrowRight"],
  down: ["Down", "ArrowDown"],
  delete: ["Backspace", "Delete"],
};

// 修饰键
const modifiedKeys: any = {
  ctrl: (event: KeyboardEvent) => event.ctrlKey,
  shift: (event: KeyboardEvent) => event.shiftKey,
  alt: (event: KeyboardEvent) => event.altKey,
  meta: (event: KeyboardEvent) => event.metaKey,
};

// 返回空对象
const noop = () => {};

function isType(obj: any) {
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[Object (.+)\]$/, "$1")
    .toLowerCase();
}

const defaultEvents: Array<KeyEvent> = ["keydown"];
function useKeyPress(
  keyFilter: KeyFilter,
  eventHandler: EventHandler = noop,
  option: EventOption = {}
) {
  const { events = defaultEvents, target } = option;
  const callRef = useRef(eventHandler);

  useEffect(() => {
    const callbackHandler = (event) => {
      // const genGuard: KeyPredicate = genKeyFormater(keyFilter);
      // if (genGuard(event)) {
      //     return callbackRef.current(event);
      // }
    };
    const el = getTargetElement(target, window);
    for (const event of events) {
      el.addEventListener(event, callbackHandler);
    }
    return () => {
      for (const event of events) {
        el.removeEventListener(event, callbackHandler);
      }
    };
  }, [events, keyFilter, target]);
}
export default useKeyPress;
