
import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
const BASE_URL = "https://corona.lmao.ninja/v2";
const Child = memo(({arr}) => {
  return <div>dfdsaf{console.log('child')}</div>
})
function useAdd () {
  const [countries, setCountries] = useState([]);
  const action  = useMemo(()=>{
      return  {
          changeCountry: (countries) =>setCountries(()=>{return countries })
      }
    }, []);
    return  [countries, action]
}

export default function  Effect() {
 const [count, setCount] = useState(0);
 const [countries, action] = useAdd();
 const [arr, setArr] = useState([]);

  // useEffect(()=>{
  //     console.log('useEffect1')
  // })

  // useEffect(() => {
  //   console.log('useEffect2')
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  // useEffect(() => {
  //   console.log('useEffect3')
  //   const id = setInterval(() => {
  //     setCount(c => c + 1);
  //   }, 1000);
  //   return () => {
  //       clearInterval(id);
  //       console.log('unMountComponent')
  //   }
  // }, []);

  useEffect(()=>{
    console.log('useEffect4')
    const fetchCountries = async () => {
        const response = await fetch(`${BASE_URL}/countries`);
        const data = await response.json();
        console.log(data)
        action.changeCountry(data.slice(0, 10));
      };
      fetchCountries();
  }, [])
  // useEffect(()=>{
  //   return ()=>{
  //     console.log('unMount')
  //   }
  // }, [])

  useEffect(()=>{
    console.log('useEffect5')
  }, [arr])


  const changeObj = useCallback(
      () => {
        setArr([])
      },
      []
  )

  return (
    <div>
        {console.log('render')}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me  count
      </button>
      <hr></hr>
      <button onClick={changeObj}>
        Click me obj
      </button>
      <hr></hr>
      <Child arr={arr}/>
    </div>
  );
}

