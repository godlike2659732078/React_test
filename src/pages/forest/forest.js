//home.js
import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import "./forest.css";
import { Row, Col, Icon, Button } from "antd";
// 引入图标
import show1 from "../../assets/img/show1.png";
import show2 from "../../assets/img/show2.png";
import show3 from "../../assets/img/show3.png";
// 列表模块底部装饰
import underline from "../../assets/img/underline.png";
import Neck from "../../components/neck/neck";
//引入路由组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class User extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      showList: [
        {
          status: "0",
          id: "1",
          image: show1,
          name: "BTC",
          myBt: "100",
          amount: "1010000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
        {
          status: "0",
          id: "2",
          image: show2,
          name: "BTC",
          myBt: "100",
          amount: "1010000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
        {
          status: "0",
          id: "3",
          image: show3,
          name: "BTC",
          myBt: "100",
          amount: "1010000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
        {
          status: "0",
          id: "4",
          image: show3,
          name: "BTC",
          myBt: "100",
          amount: "1010000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
        {
          status: "1",
          id: "5",
          image: show3,
          name: "BTC",
          myBt: "100",
          amount: "1010000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
        {
          status: "2",
          id: "6",
          image: show3,
          name: "BTC",
          myBt: "100",
          amount: "1010000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
      ],
    };
    this.props.onRef(this);
  }
  // 携带参数跳转
  gotoDetail() {
    this.props.history.push("/forestDetail");
  }
  render() {
    return (
      <div>
        <div className="header_box">
          <div className="neck_box">
            <img className="neck_logo" src={logo} alt="" />
          </div>
          <p className="title_text">选择一种代币并质押</p>
          <p className="text_introduce">通过提供流动性来获取珍珠代币.</p>
        </div>
        <Row
          gutter={0}
          className={this.state.show === true ? "antCol" : "showList"}
        >
          {/* 遍历展示列表数据 */}
          {this.state.showList.map(function (val) {
            return (
              <Col xs={24} sm={24} md={24} lg={8} xl={8} key={val.id}>
                <div className="forest_box">
                  <div
                    className="bbb"
                    className={val.status == 0 ? "bbb" : "hide"}
                  >
                    <Icon className="endIcon" type="clock-circle" />
                    <span>结束 </span>
                  </div>
                  <div className="showImage_forestBox">
                    <img src={val.image} className="showImage_forest" alt="" />
                  </div>
                  <div className="showBox">
                    <p className="forestBoxTitle">{val.name}/Justswap</p>
                    <div className="pledge_forest">
                      <p>存款 USDT</p>
                      <p>获取XXX代币</p>
                    </div>
                    <div className="forestBox_foot">
                      <Button
                        size="large"
                        className={val.status == 2 ? "willBtn" : "hide"}
                      >
                        即将推出
                      </Button>
                      <Link
                        to={{
                          pathname: "/forestDetail",
                          state: { name: "aaa", price: "bbb" },
                        }}
                      >
                        <button
                          // size="large"
                          className={val.status == 2 ? " hide" : " selectBtn"}
                        >
                          选择
                        </button>
                      </Link>
                    </div>
                  </div>

                  <img src={underline} className="underline" alt="" />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
