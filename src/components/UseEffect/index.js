
import React, { useState, useEffect, useCallback } from 'react';
const BASE_URL = "https://corona.lmao.ninja/v2";
export default function  Effect() {
 const [count, setCount] = useState(0);
 const [countries, setCountries] = useState([]);
 const [obj, setObj] = useState({test: []});
  useEffect(()=>{
      console.log('useEffect1')
  })

  useEffect(() => {
    console.log('useEffect2')
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log('useEffect3')
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => {
        clearInterval(id);
        console.log('unMountComponent')
    }
  }, []);

  useEffect(()=>{
    console.log('useEffect4')
    const fetchCountries = async () => {
        const response = await fetch(`${BASE_URL}/countries`);
        const data = await response.json();
        console.log(data)
        setCountries(data.slice(0, 10));
      };
      fetchCountries();
  }, [])

  useEffect(()=>{
    console.log('useEffect5')
  }, [obj])


  const changeObj = useCallback(
      () => {
        const { test } = obj; 
        test.push(Math.random())
        setObj({test: [...test]})
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
      <button onClick={changeObj}>
        Click me obj
      </button>
    </div>
  );
}