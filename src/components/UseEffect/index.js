
import React, { useState, useEffect } from 'react';

export default function  Effect() {
 const [count, setCount] = useState(0);
 const [countries, setCountries] = useState([]);
 const BASE_URL = "https://corona.lmao.ninja/v2";
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