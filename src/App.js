import logo from './logo.svg';
import './App.css';
import MyRoute from './library/MyRoute';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
export const MyContext = React.createContext();

function App() {
  const [a,setA]=useState(0)

  const func=()=>{
    setA(1)
  }
  return (<>
  {a}
    <MyContext.Provider value={func}>
      <MyRoute />
    </MyContext.Provider>
  </>)
}

export default App;
