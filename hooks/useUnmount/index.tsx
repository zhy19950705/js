import { useEffect } from "react";
import usePersistFn from "../usePersistFn";
import { isFunction } from "../utils";

function unMount(fn: any) {
  const fnPersist = usePersistFn(fn);
  useEffect(() => {
    return () => {
      if (isFunction(fnPersist)) {
        fnPersist();
      }
    };
  }, []);
}
export default unMount;
