
import React, { useState, useEffect, useCallback, useMemo } from 'react';
var fn = null;
export default function  Callback() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
//  var obj = {};
 var callback = ()=>{}
//  var newObj = useMemo(() => {
//      return <div>useMemo</div>
//  }, [])
 const newCallback = useCallback(callback, [count])
console.log('callback equal fn', Object.is(newCallback, fn))
 fn = newCallback;
  useEffect(() => {
    console.log('useEffect1')
    document.title = `You clicked ${count} times`;
  }, []);
  const changeCount = useCallback(
    () => setCount(count + 1),
    []
  )
  const changeNum = useCallback(
    () => setNum(num + 1),
    []
  )
  return (
    <div>
        {console.log('render')}
      <p>You clicked {count} times</p>
      <button onClick={changeCount}>
        Click me count
      </button>
      <button onClick={changeNum}>
        Click me num
      </button>
    </div>
  );
}