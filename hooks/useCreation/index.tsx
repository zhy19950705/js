import { useRef } from "react";

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true;
  for (let i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== deps[i]) return false;
  }
  return true;
}
function useCreation<T>(factory: () => T, deps) {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  });
  if (current.initialized === false || depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialize = true;
  }
  return current.obj as T;
}
export default useCreation;
