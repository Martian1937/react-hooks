
import React, { useState, useEffect, useCallback, useMemo } from 'react';
var fn = null;
export default function  Effect() {
  const [count, setCount] = useState(0);
//  var obj = {};
 var callback = ()=>{}
//  var newObj = useMemo(() => {
//      return <div>useMemo</div>
//  }, [])
 const newCallback = useCallback(callback, [])
console.log('callback equal callback', Object.is(newCallback, fn))
 fn = newCallback;
  useEffect(() => {
    console.log('useEffect2')
    document.title = `You clicked ${count} times`;
  }, []);
  return (
    <div>
        {console.log('render')}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </div>
  );
}