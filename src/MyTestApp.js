import React from 'react';
import Newcomponent from './Newcomponent';
import './MyTestApp.css';


function MyTestApp(props) {
  return (
    <div className="mycsstestapp"><p>this is a Place={props.Place} and the Address is={props.Address}</p></div>
);
  }

export default MyTestApp;