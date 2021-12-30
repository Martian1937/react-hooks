
import React, { useState, useCallback, memo } from 'react';

let fn = null;
const add = (pre) => {
  return pre + 1;
}
export default function  Callback() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
//  const { count, num, action} = useAdd();
//  var obj = {};
 const change = useCallback(()=>{
  setCount((pre)=>{return pre+1});
}, [count])

const changeNum = useCallback(() => {
  setNum(add)
 }, [num]);

 console.log('change is equal fn', Object.is(change, fn))

 fn = change;

 
  return (
    <div>
        {console.log('render')}
      <p>You clicked {count} times</p>
      <button onClick={change}>
        Click me count {count}
      </button>
      <hr></hr>
      <Child1 changeNum={changeNum} num={num}/>
      <hr></hr>
      <Child2 changeNum={changeNum} num={num} />
      <hr></hr>
      <Child3 change={change}/>
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
const Child3 = memo(({change}) => {
    return (
      <button>
          { console.log('child3')}
           真不搓
      </button>
    )
  });

// function useAdd () {
//     const [count, setCount] = useState(0);
//     const [num, setNum] = useState(0);
//     const action  = useMemo(()=>{
//         return  {
//             changeCount: () =>setCount((s)=>s+1),
//             changeNum: () => setNum((s)=>s+1)
//         }
//       }, []);
//       return [count,
//         num, action]
// }