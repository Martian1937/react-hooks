
import React, { useState, useEffect, useCallback, useMemo } from 'react';
var fn = null;
export default function  Callback() {
 const { count, num, action} = useAdd();
//  var obj = {};
 var callback = ()=>{}
//  var newObj = useMemo(() => {
//      return <div>useMemo</div>
//  }, [])
 const newCallback = useCallback(callback, [count])
// console.log('callback equal fn', Object.is(newCallback, fn))
//  fn = newCallback;
  useEffect(() => {
    console.log('useEffect1')
    document.title = `You clicked ${count} times`;
  }, []);

  console.log('callback equal fn', Object.is(action, fn))
  
  fn = action;
  
  return (
    <div>
        {console.log('render')}
      <p>You clicked {count} times</p>
      <button onClick={action.changeCount}>
        Click me count {count}
      </button>
      <button onClick={action.changeNum}>
        Click me num ${num}
      </button>
    </div>
  );
}

function useAdd () {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const action  = useMemo(()=>{
        return  {
            changeCount: () =>setCount((s)=>s+1),
            changeNum: () => setNum((s)=>s+1)
        }
      }, []);
      return  {
        count,
        num,
        action
      }
}