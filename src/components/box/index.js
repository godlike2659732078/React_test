import React from "react";
import ReactDOM, { Component } from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import Routers from "./react-router/router";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Test from "./pages/test/test";


//引入一些模块
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  HashRouter,

} from "react-router-dom";

const { Header, Content, Footer } = Layout;
function Aaa(){
  return <h1>111111111</h1>
}
 export default class App extends React.Component {
  render() {
    console.log(HashRouter);
    return (
      <Layout className="layout">
        <Router>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={"/home"}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="/home">
                <NavLink to="/home">首页</NavLink>
              </Menu.Item>
              <Menu.Item key="/about">
                <NavLink to="/about">关于</NavLink>
              </Menu.Item>
              <Menu.Item key="/test">
                <NavLink to="/test">测试</NavLink>
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
}

