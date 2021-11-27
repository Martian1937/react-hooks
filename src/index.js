import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout'
import routes from  './routes'

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      {
        routes.map((item)=>{
          return (<Route {...item} key={item.title}/>)
        })
      }
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
