import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import "./neck.css";
import { Icon, message, Row, Col } from "antd";
import copy from "copy-to-clipboard";

// function handleCopy(value) {
//   if (copy(value)) {
//     message.success("複製成功");
//   } else message.error("複製失敗，請手動複製");
// }
export default class Neck extends Component {
  constructor() {
    super();
    this.state = {
      //设置初始值
      content: 1,
    };
  }

  render() {
    return (
      <div>
        <div className="neck_box">
          <img className="neck_logo" src={logo} alt="" />
        </div>
        <div className="neck_box">
          <p className="title_text">随时抵押，随时解压，立即获得奖励。</p>
        </div>
        <div>
          <p className="text_">
            随时抵押，随时解压，立即获得奖励。随时抵押，随时解压，立即获得奖励。
          </p>
          <p className="text_">随时抵押，随时解压，立即获得奖励。</p>
        </div>
        {/* <div className="copy_text">
          代币地址：<p id="a">FSAFSAFRWRET%$U^GFDSAFSASAw#@e</p>
          <Icon
            type="copy"
            onClick={() => handleCopy(document.getElementById("a").innerHTML)}
          />
        </div>
        <div className="copy_text">
          代币地址：<p id="b">FSAFSAFRWRET%$U^GFDSAFSASAw#@e</p>
          <Icon
            type="copy"
            onClick={() => handleCopy(document.getElementById("b").innerHTML)}
          />
        </div> */}
        <div style={{}}>
          <Row gutter={80} type="flex" justify="center">
            <Col
              xs={{ span: 20 }}
              sm={{ span: 10 }}
              md={{ span: 10 }}
              lg={{ span: 9 }}
              xl={{ span: 9 }}
            >
              <div className="dragon">


              </div>
            </Col>
            <Col xs={{ span: 20 }} sm={10} md={10} lg={9} xl={9}>
              <div className="dragon"></div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
