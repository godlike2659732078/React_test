//about.js
import React, { Component } from "react";
import Pages from "../../components/header/header.jsx"
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this)
    return (
     <Pages></Pages>
    );
  }
}
