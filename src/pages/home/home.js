//home.js
import React, { Component } from "react";
import "./home.css";
import { Row, Col, Icon, message } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import copy from "copy-to-clipboard";

function handleCopy(value) {
  if (copy(value)) {
    message.success("複製成功");
  } else message.error("複製失敗，請手動複製");
}
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="copy_text">
          <Link to="/about">
            <p id="a">123456789</p>
          </Link>

          <Icon
            type="copy"
            onClick={() => handleCopy(document.getElementById("a").innerHTML)}
          />
        </div>

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
