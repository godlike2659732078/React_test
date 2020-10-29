//about.js
import React, { Component } from "react";
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  gotoAbout() {
    this.props.history.push({pathname: '/about', query: { id: 1 }})
    console.log(this.props);
  }
  render() {
    console.log(this)
    return (
      <div>
        您的点击数：{this.state.count}
        <button onClick={this.gotoAbout.bind(this)}>点击跳转</button>
      </div>
    );
  }
}
