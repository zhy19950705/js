import { useRef } from "react";

export type noop = (...args: any[]) => any;

function usePersitFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);

  const persistFn = useRef<T>();

  if (!persistFn.current) {
    persistFn.current = function (...args) {
      return fnRef.current!.apply(this, args);
    } as T;
  }

  return persistFn.current;
}
export default usePersitFn;
