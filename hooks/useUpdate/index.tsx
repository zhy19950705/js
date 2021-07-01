import { useState } from "react";
import { useCallback } from "react/cjs/react.development";

function useUpdate() {
  const [, setState] = useState({});
  return useCallback(() => setState({}), []);
}
export default useUpdate;
