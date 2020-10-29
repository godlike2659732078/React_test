//about.js
import React, { Component } from "react";

function Clock() {
  return (
    <div>
      <h1>hellow</h1>
      <h2>It is </h2>
    </div>
  );
}

export default class About extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.query);
    this.state = {
      date: new Date(),
      id:""
    };
  }
  componentDidMount(){
    this.setState({id:this.props.location.query.id})
    console.log(2);
  }
  render() {
    console.log(1);
    return (
      <div>
        <Clock></Clock>
    <h1>欢迎，这里是{this.state.id}</h1>
      </div>
    );
  }
}
