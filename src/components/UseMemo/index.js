
import React, { useState, useEffect, useCallback, useMemo, Children } from 'react';

export default function  Effect() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1000);
  const [test, setTest] = useState(0);
  const changeCount = useCallback(()=>{
    setCount(count + 1)
  }, [count]);
  const changeNum = useCallback(()=>{
    setNum(num + 1)
  }, [num]);
  const changeTest = useCallback(()=>{
    setTest(test + 1)
  }, [test]);
  return (
    <div>
        <Child count={count} num={num}></Child>
      <button onClick={changeCount}>
        Click me Count
      </button>
      <button onClick={changeNum}>
        Click me Num
      </button>
      <button onClick={changeTest}>
        Click me Num
      </button>

    </div>
  );
}

function Child ({ count, num}) {
    const child1 = useMemo(() => {
        return (
            <div>
                {console.log('child1 dom 我跟着num变')}
                <div>我用了memo变成了{num}</div>
            </div>
        );
    }, [num])
    const addValue = useMemo(() => {
        console.log('addValue 我是一个复杂的计算');
        let value = 0;
        for(let i= 0; i < num ;i++) {
            value+=i;
        }
        return value;
    }, [num])
const child2 = <div>{console.log('child2, 我一直变')}我变成了{num}</div>
    return (
        <React.Fragment>
            {child1}
            {addValue}
            {child2}
        </React.Fragment>
    );
}