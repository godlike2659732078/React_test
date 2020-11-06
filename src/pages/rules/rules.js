import React from "react";

export default class Shop extends React.Component {
  constructor(props){
    super(props)
    this.props.onRef(this);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>2222222222222</h1>
      </div>
    );
  }
}
