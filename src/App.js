import React from 'react';
import Newcomponent from './Newcomponent';
import MyTestApp from './MyTestApp';


function App(props) {
  return (
    <div>
      this is a header Name={props.name} and the Age is={props.age}
      <br/>
<MyTestApp has addres at Place="myplace" and Address="add"></MyTestApp>
    </div>
);
}

export default App;

// <header className="App-header">
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>

// <br></br>
// <Newcomponent></Newcomponent>
