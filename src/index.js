import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';


function Mediacard(props){

  return(<div>MediaTitle is <h1>{props.title}</h1> <br/>contains body <h2>data= {props.body} </h2> <br/> where image=<h3>{props.imageurl}</h3> </div>);
}

function Isopen(props){

return(<div> check session open = {props.opened===true? "Open" : "Closed"} </div>);
}

ReactDOM.render(
  <div><App name="Affan Saied" age="33"/> </div>
   <React.StrictMode>
     <App />
   </React.StrictMode>,
<Isopen opened='True' />
,
<Mediacard title="React book title" body="React body" imageurl="https://360x7.com/media/image/329/maxstone-smart-wireless-camera-remote.jpg"/>
, document.querySelector('#root')
//,  document.getElementById('root')
,
React.createElement('div',null,React.createElement('span',null,"this is a span element")),

);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
