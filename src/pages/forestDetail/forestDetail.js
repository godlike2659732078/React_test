//home.js
import React from "react";
import logo from "../../assets/img/numRight.png";
import "./forestDetail.css";
import { Row, Col, Button, Modal, Input } from "antd";
// 引入图标
import show1 from "../../assets/img/show1.png";

// 列表模块底部装饰
import underline from "../../assets/img/underline.png";
export default class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.props.onRef(this);
    this.state = {
      // 对应代币余额
      num: "100.0000000",
      iptNum: "",
    };
  }
  componentDidMount() {
    console.log(this);
  }
  getNum() {
    this.setState({
      iptNum:this.state.num
    })
  }
  state = {
    loading: false,
    visible: false,
  };
  // 点击弹出质押代币事件
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  //
  handleOk = () => {
    this.setState({ loading: true });
    this.setState({ loading: false, visible: false });
  };
  // 点击关闭弹窗
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
        {/* 响应式质押以及矿池余额展示部分 */}
        <Row
          gutter={20}
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
                  <button key="submit" size="large" className="selectBtns">
                    收割
                  </button>
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
                  <button className="selectBtns" onClick={this.showModal}>
                    批准/代币名称
                  </button>
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
        <p>{this.state.num}</p>
            </div>
            <div className="pledgeNumBox">
              <Input className="pledgeNum" value={this.state.iptNum} />
              <Button className="maxValue" onClick={this.getNum.bind(this)}>
                最大值
              </Button>
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
