import React from "react";
import Test from "../test/test";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      //设置初始值
      content: 1,
    };
  }
  handleClick = () => {
    this.setState({
      //修改初始值
      content: this.state.content + 1,
    });
  };
  render() {
    return (
      <div>
        <Test></Test>
        <p>counter===={this.state.content}</p> //展示 state 里面的内容
        <button onClick={this.handleClick}>点击更改</button>{" "}
        {/*调用 handleClick 函数*/}
      </div>
    );
  }
}
