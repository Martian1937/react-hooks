
import React, { useState, useEffect, useMemo, memo } from 'react';
var fn = null;
export default function  Callback() {
 const [count, num, action]  = useAdd();
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
      <hr></hr>
      <button onClick={action.changeNum}>
        Click me num ${num}
      </button>
      <hr></hr>
      <Child1 changeNum={action.changeNum} num={num}/>
      <hr></hr>
      <Child2 changeNum={action.changeNum} num={num}/>
    </div>
  );
}

const Child1 = ({num, changeNum}) => {
  return (
    <button onClick={changeNum}>
        { console.log('child1')}
        Click1 me num ${num}
    </button>
  )
};

const Child2 = memo(({changeNum, num}) => {
  return (
    <button onClick={changeNum}>
        { console.log('child2')}
        Click2 me num ${num}
    </button>
  )
});

function useAdd () {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const action  = useMemo(()=>{
        return  {
            changeCount: () =>setCount((s)=>s+1),
            changeNum: () => setNum((s)=>s+1)
        }
      }, []);
      return  [count,num, action]
}