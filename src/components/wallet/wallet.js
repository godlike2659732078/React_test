import { Modal, Button } from "antd";
import React from "react";
import "./wallrt.css";
import logo from "../../assets/img/numRight.png";
export default class Acount extends React.Component {
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
        <Button type="primary" onClick={this.showModal}>
          我的钱包
        </Button>
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
              取消
            </Button>,
          ]}
        >
          <div className="walletBox">
            <div className="walletLogo">
              <img src={logo} alt="" />
            </div>
            <p className="balance">0.00000000</p>
            <p>我的代币余额</p>
          </div>
        </Modal>
      </div>
    );
  }
}
