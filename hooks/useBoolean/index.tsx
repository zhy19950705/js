import { useMemo, useState } from "react";
import useToggle from "../useToggle";

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean | undefined) => void;
}

export default function useBoolean(defaultValue = false) {
  const [state, { toggle }] = useToggle(defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = toggle(true);
    const setFalse = toggle(false);
    return { toggle, setTrue, setFalse };
  }, [toggle]);

  return [state, actions];
}
