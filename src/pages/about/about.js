//about.js
import React, { Component } from 'react';




class Clock extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state={
      date:new Date()
    }
    console.log(this.state.date.toLocaleTimeString())
   
  }
  render() {

    return  <div>
    <h1>Hello, world!</h1>
    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
  </div>;
  }

}

export default class About extends Component {
  render() {
    return (
    <div>
      <Clock></Clock>
      <h1>
      欢迎，这里是About
      {this.props.children}  
      {/* =//这里就是嵌套路由展示的地方 */}
    </h1>
    </div>
   )
  }
}