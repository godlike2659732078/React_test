//home.js
import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import "./forestDetail.css";
import { Row, Col, Icon, Button, Modal, Input } from "antd";
// 引入图标
import show1 from "../../assets/img/show1.png";

// 列表模块底部装饰
import underline from "../../assets/img/underline.png";
export default class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.props.onRef(this);
  }
  componentDidMount() {
    console.log(this);
  }
  state = {
    loading: false,
    visible: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    this.setState({ loading: false, visible: false });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <div className="header_box">
          <div className="neck_box">
            <img className="neck_logo" src={logo} alt="" />
          </div>
          <p className="title_text">PEARL/TRX LP</p>
          <p className="text_introduce">存入 PEARL/TRX LP 并获取珍珠.</p>
        </div>
        <Row
          gutter={0}
          className={this.state.show === true ? "antCol" : "showList"}
          type="flex"
          justify="center"
        >
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="forest_detailBox">
              <div className="showImage_forestBox">
                <img src={show1} className="showImage_forest" alt="" />
              </div>
              <div className="showBox">
                <div className="haveToken">
                  <p>0.00000000</p>
                  <p>已获取的珍珠</p>
                </div>
                <div className="forestBox_foot">
                  <Button key="submit" size="large" className="selectBtn">
                    收割
                  </Button>
                </div>
              </div>
              <img src={underline} className="underline" alt="" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="forest_detailBox">
              <div className="showImage_forestBox">
                <img src={show1} className="showImage_forest" alt="" />
              </div>
              <div className="showBox">
                <div className=" haveToken">
                  <p>0.00000000</p>
                  <p>PEARL/TRX 已质押</p>
                </div>
                <div className="forestBox_foot">
                  <Button
                    size="large"
                    className="selectBtn"
                    onClick={this.showModal}
                  >
                    批准/代币名称
                  </Button>
                </div>
              </div>
              <img src={underline} className="underline" alt="" />
            </div>
          </Col>
        </Row>
        <Modal
          visible={visible}
          title="我的账户"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              size="large"
              loading={loading}
              onClick={this.handleOk}
              className="walletBtn"
            >
              确认质押
            </Button>,
          ]}
        >
          <div className="walletBox">
            <div className="walletLogo">
              <img src={logo} alt="" />
            </div>
            <div className="singleBalance">
              <p>代币余额:</p>
              <p>0.00000000</p>
            </div>
            <div className="pledgeNumBox">
              <Input className="pledgeNum" />
              <Button className="maxValue">最大值</Button>
            </div>
          </div>
        </Modal>
        <div className="forestDetail_foot">
          <Button size="large" className="footBtn">
            收割并解押
          </Button>
        </div>
      </div>
    );
  }
}
