//home.js
import React, { Component } from "react";
import "./home.css";
import { Row, Col,  } from "antd";
import Neck from "../../components/neck/neck";
export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Neck></Neck>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="left_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="center_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="right_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="left_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="center_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="right_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="left_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="center_box"></div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="right_box"></div>
          </Col>
        </Row>
      </div>
    );
  }
}
