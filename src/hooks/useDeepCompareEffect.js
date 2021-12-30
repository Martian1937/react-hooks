import isEqual from 'lodash/isEqual';
import { useEffect, useRef } from 'react';

const depsEqual = (aDeps = [], bDeps = []) => {
  return isEqual(aDeps, bDeps);
};
// useDeepCompareEffect(()=>{}, [arr,obj])

const useDeepCompareEffect = (callback, deps) => {
  const ref = useRef();
  const signalRef = useRef(0);
  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }
  useEffect(callback, [signalRef.current]);
};

export default useDeepCompareEffect;

