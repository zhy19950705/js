import { useEffect, useRef } from "react";

function useUpdateEffect(fn: () => void, deps: any[]) {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      if (typeof fn === "function") {
        return fn();
      }
    }
  }, [deps]);
}
export default useUpdateEffect;
