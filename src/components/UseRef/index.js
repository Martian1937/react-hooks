
import React, { useState, useEffect, useCallback, useMemo, Children, useRef } from 'react';

export default function  Memo() {
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
    const inputEl = useRef(null);
    const timeId = useRef(null);
    useEffect(() => {
      const id = setInterval(() => {
          console.log('setInterval')
      }, 3000);
      timeId.current = id;
      return () => {
          clearInterval(timeId.current);
      };
    }, []);

    useEffect(()=>{
      inputEl.current.addEventListener('focus', ()=>{
        console.log('test')
      })
    }, []);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}