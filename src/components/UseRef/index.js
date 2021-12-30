
import React, { useState, useEffect, useCallback, useRef, Fragment } from 'react';
const ref = { current: null};

export default function  Ref() {
  const [flag, setFlag] = useState(true);

  const changeTest = useCallback(()=>{
    setFlag((s)=>!s)
  }, []);
  return (
    <div>
        {flag ? <Child  /> : null}
        <button onClick={changeTest}>
           {flag ? '卸载组件' : '挂载组件'}
        </button>

    </div>
  );
}

function Child () {
    const dialogRef = useRef(null)
    const inputEl = useRef(null);
    const timeId = useRef(null);
    const hwbRef = useRef({});
    const [count, setCount] = useState(0);
    // hwbRef.name = 'hwb';
    console.log(timeId);
    console.log(hwbRef.current.name = count);
    console.log(hwbRef);
    useEffect(() => {
      const id = setInterval(() => {
          console.log('setInterval')
      }, 3000);
      timeId.current = id;
      return () => {
          clearInterval(timeId.current);
          dialogRef.current = null;
          console.log(timeId.current ,'timeId.current')
      };
    }, []);

    function clear() {
      clearInterval(timeId.current);
      dialogRef.current = 1;
    }
    useEffect(()=>{
      inputEl.current.addEventListener('focus', ()=>{
        console.log('test')
      })
    }, []);
    const onButtonClick = () => {
      // setCount(count+1);
        // `current` 指向已挂载到 DOM 上的文本输入元素
        // inputEl.current.focus();
        dialogRef.current = 1
    };
    return (
        <Fragment>
            {console.log('test')}
            <input ref={inputEl} type="text" />
            {timeId.current}
            <button onClick={onButtonClick}>Focus the input</button>
        </Fragment>
    );
}
Child.ref = {current: ''}