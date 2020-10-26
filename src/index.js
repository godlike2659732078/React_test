import React from "react";
import ReactDOM, { Component } from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import Routers from "./react-router/router";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Test from "./pages/test/test"
//引入一些模块
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import router from "./react-router/router";
const { Header, Content, Footer } = Layout;
function App(props) {
  console.log(this);
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">关于</Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/test">测试</Link>
              </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            <Route path="/home" component={Home} />
            <Route path="/" render={() => <Redirect to="/home" />}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/test" component={Test} />
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Router>
    </Layout>
  );
}
ReactDOM.render(
  <div>
    <App></App>
  </div>,
  document.getElementById("root")
);
