import { useLayoutEffect, useRef } from "react";

function useUpdateLayoutEffect(fn: () => void, deps: any[]) {
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      if (typeof fn === "function") {
        return fn();
      }
    }
  }, [deps]);
}
