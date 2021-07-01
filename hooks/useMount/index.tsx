import { useEffect } from "react";

function useMmount(fn: () => void) {
  useEffect(() => {
    if (typeof fn === "function") {
      fn();
    }
  }, []);
}
export default useMmount;
