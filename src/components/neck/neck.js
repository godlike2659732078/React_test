import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import underline from "../../assets/img/underline.png";
import numLeft from "../../assets/img/numRight.png";
import numRight from "../../assets/img/numLeft.png";

import "./neck.css";
import { Row, Col } from "antd";

// function handleCopy(value) {
//   if (copy(value)) {
//     message.success("複製成功");
//   } else message.error("複製失敗，請手動複製");
// }
export default class Neck extends Component {

  // 渲染完成
  componentDidMount() {
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
          <p className="title_text">随时抵押，随时解押，立即获得奖励。</p>
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
        <div>
          <Row gutter={60} type="flex" justify="center">
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 20 }}
              xl={{ span: 9 }}
            >
              <div className="dragon">
                <div className="bootBox">
                  <div className="allNumBox">
                    <img src={numLeft} alt="" />
                    <div className="boot_text">
                      <p>我的代币余额</p>
                      <p>10000.000000</p>
                    </div>
                  </div>
                  <img className="underline" src={underline} alt="" />
                </div>
              </div>
            </Col>
            <Col xs={{ span: 20 }} sm={20} md={20} lg={20} xl={9}>
              <div className="dragon">
                <div className="bootBox">
                  <div className="allNumBox">
                    <img src={numRight} alt="" />
                    <div className="boot_text">
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
