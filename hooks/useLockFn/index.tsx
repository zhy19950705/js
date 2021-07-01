import { useCallback } from "react";
import { useRef } from "react";

function useLockFn(fn: (...args) => Promise<any>) {
  const lockRef = useRef(false);
  return useCallback(
    async (...args) => {
      if (lockRef.current) return;
      lockRef.current = true;
      try {
        const ret = await fn(...args);
        lockRef.current = false;
        return ret;
      } catch (e) {
        lockRef.current = false;
        throw e;
      }
    },
    [fn]
  );
}
export default useLockFn;
