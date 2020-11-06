//home.js
import React, { Component } from "react";
import "./home.css";
import { Row, Col, Icon } from "antd";
// 引入首页头部组件
import Neck from "../../components/neck/neck";
// 引入图标
import show1 from "../../assets/img/show1.png";
import show2 from "../../assets/img/show2.png";
import show3 from "../../assets/img/show3.png";
// 列表模块底部装饰
import underline from "../../assets/img/underline.png";
export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
    this.props.onRef(this);
    // 数据
    this.state = {
      show: true,
      showList: [
        {
          id: "1",
          image: show1,
          name: "BTC",
          myBt: "100",
          amount: "10100.000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
        {
          id: "2",
          image: show2,
          name: "BTC",
          myBt: "100",
          amount: "10100.000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
        {
          id: "3",
          image: show3,
          name: "BTC",
          myBt: "100",
          amount: "10100.000000",
          bitPrice: "100$",
          namePrice: "10000$",
        },
      ],
    };
  }
  // 反馈
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
  // 调用监测窗口宽度事件
  handleResize = (e) => {
    let e_width = e.target.innerWidth;
    this.handleClientW(e_width, 700);
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
      <div>
        <Neck></Neck>
        <Row
          gutter={80}
          className={this.state.show === true ? "antCol" : "showList"}
        >
          {/* 遍历展示列表数据 */}
          {this.state.showList.map(function (val) {
            return (
              <Col xs={24} sm={24} md={24} lg={8} xl={8} key={val.id}>
                <div className="col_box ">
                  <img src={val.image} className="showImage" alt="" />
                  <div className="showBox">
                    <p className="showBoxTitle">{val.name}统计资料</p>
                    <div className="pledge">
                      <p>我的质押：</p>
                      <p>{val.myBt}</p>
                    </div>
                    <div className="pledge allPledge">
                      <p>总质押：</p>
                      <p>{val.amount}</p>
                    </div>
                    <div>
                      <p className="priceTitle">=======价格=======</p>
                      <p className="prices">
                        1{val.name}={val.namePrice}
                      </p>
                      <p className="prices">1USDT=0.9986$</p>
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
