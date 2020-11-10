import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import underline from "../../assets/img/underline.png";
import numLeft from "../../assets/img/numRight.png";
import numRight from "../../assets/img/numLeft.png";

import "./neck.css";
import { Icon, message, Row, Col } from "antd";
import copy from "copy-to-clipboard";

// function handleCopy(value) {
//   if (copy(value)) {
//     message.success("複製成功");
//   } else message.error("複製失敗，請手動複製");
// }
export default class Neck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }
  handleClientW = (width, num) => {
    if (width < num) {
      this.setState({
        show: false,
      });
    } else {
      this.setState({
        show: true,
      });
    }
  };
  handleResize = (e) => {
    let e_width = e.target.innerWidth;
    this.handleClientW(e_width, 700);
    // console.log('浏览器窗口大小改变事件', e.target.innerWidth);
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  // 渲染完成
  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this)); //监听窗口大小改变
    let clientW = document.documentElement.clientWidth;
    this.handleClientW(clientW, 1040);
    if (window.location.pathname === "/") {
      this.setState({
        //修改初始值
        path: "/home",
      });
    }
  }

  render() {
    return (
      <div id="neck">
        <div className="neck_image">
          <img className="neck_logo" src={logo} alt="" />
        </div>
        <div className="neck_box">
          <p
            className="title_text"
            className={this.state.show == true ? "title_text" : "title_texts"}
          >
            随时抵押，随时解押，立即获得奖励。
          </p>
        </div>
        <div className="text_box">
          <p className="text_">今天是在TRON上挖珍珠的好日子。</p>
          <p className="text_">
            Pearl.finance的智能合约已通过SlowMist审核。检查 审核报告此处。
          </p>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="gotoJust">
            <a
              href="https://justswap.io/#/scan/detail/trx/TGbu32VEGpS4kDmjrmn5ZZJgUyHQiaweoq"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              Justswap Dragon/TRX
            </a>
          </button>
        </div>
        <div style={{}}>
          <Row gutter={80} type="flex" justify="center">
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 9 }}
              xl={{ span: 9 }}
            >
              <div className={this.state.show == true ? "dragon" : "dragons"}>
                <div className="bootBox">
                  <div
                  
                    className={
                      this.state.show == true ? "allNumBox" : "allNumBoxs"
                    }
                  >
                    <img src={numLeft} alt="" />
                    <div
                      className="boot_text"
                      className={
                        this.state.show == true ? "boot_text" : "boot_texts"
                      }
                    >
                      <p>我的代币余额</p>
                      <p>10000.000000</p>
                    </div>
                  </div>
                  <img className="underline" src={underline} alt="" />
                </div>
              </div>
            </Col>
            <Col xs={{ span: 20 }} sm={20} md={20} lg={9} xl={9}>
              <div className={this.state.show == true ? "dragon" : "dragons"}>
                <div className="bootBox">
                  <div
                  
                    className={
                      this.state.show == true ? "allNumBox" : "allNumBoxs"
                    }
                  >
                    <img src={numRight} alt="" />
                    <div
                      className="boot_text"
                      className={
                        this.state.show == true ? "boot_text" : "boot_texts"
                      }
                    >
                      <p>总供应量</p>
                      <p>100000</p>
                    </div>
                  </div>
                  <img className="underline" src={underline} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
