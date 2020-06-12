import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Newcomponent from './Newcomponent';


function App(props) {
  return (
    <div className="App">
      this is a header Name={props.Name} and the Ages is={props.Age}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <br></br>
      <Newcomponent></Newcomponent>
    </div>
);
}

export default App;
