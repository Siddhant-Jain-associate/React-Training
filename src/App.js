import { Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Math from './Components/Math/Math';
function App() {
  let [result,first,second] = [11,7,4];
  return (
    
      <Typography>
        <Math first="7" second="4" operator="+" result="11" equal="="   />             
        <br/>
        <Math first="7" second="3" operator="-" result="4" equal="=" />
        <br/>
        <Math first="7" second="0" operator="/" result="infinite" equal="=" />
        <br/>
        <Math first="7" second="4" operator="^" result="invalid operator" equal="=" />
        <br/>
        <Math>
          <h4>Sum of {first} and {second} is {result} </h4>
        </Math>
        <Math>
          <h3>When we add {first} with {second} then we will get {result} as result. </h3>
        </Math>
        </Typography>
  );
}

export default App;
