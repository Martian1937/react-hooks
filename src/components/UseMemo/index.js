
import React, { useState, useEffect, useCallback, useMemo, Children } from 'react';

export default function  Memo() {
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
     <Parent  num={num} count={count}></Parent>
      <button onClick={changeCount}>
        Click me Count
      </button>
      <hr></hr>
      <button onClick={changeNum}>
        Click me Num
      </button>
      <hr></hr>
      <button onClick={changeTest}>
        Click me Test
      </button>

    </div>
  );
}

function Child ({ num, count }) {

    const child1 = useMemo(() => {
        return (
            <div>
                {console.log('child1 dom 我跟着num变')}
                <div>我用了memo变成了{num}</div>
            </div>
        );
    }, [num])

    const addValue = useMemo(() => {
        console.log('addValue 我是一个复杂的计算，我也跟着num变');
        let value = 0;
        for(let i= 0; i < num ;i++) {
            value+=i;
        }
        return value;
    }, [num])

   const child2 = useMemo(()=>{
       return (
        <div>{console.log('child2, 我跟着count变')}我变成了{count}</div>
       )
   }, [count])
    return (
        <React.Fragment>
            {console.log('render parent')}
            {child1}
            {addValue}
            {child2}
        </React.Fragment>
    );
}
const Parent = React.memo(Child)  // pureComponent

function useAdd () {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1000);
  const [test, setTest] = useState(0);
  const action  = useMemo(()=>{
      return  {
          changeCount: () =>setCount((s)=>s+1),
          changeNum: () => setNum((s)=>s+1),
          changeTest: () => setTest((s)=>s+1)
      }
    }, []);
    return  {
      count,
      num,
      test,
      action
    }
}
