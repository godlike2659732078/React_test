//about.js
import React, { Component } from 'react';

function App(props) {
  return (
    <div>
      <h1>chainmall{props.name}</h1>
    </div>
  );
}
export default class Test extends React.Component{
  render(){
    return <App name="HX"></App>
  }
}

