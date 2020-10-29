import React from "react";
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //设置初始值
      content: 111111111111111111,
    };
    console.log(props)
  }
componentDidMount(){
    console.log(this  )
}
  render() {
    return (
      <div>
        <h1>{this.state.content}</h1>
      </div>
    );
  }
}
