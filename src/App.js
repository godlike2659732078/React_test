import React from "react";
import logo from "./assets/img/logo.png";
import Acount from "./components/acount/acount";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from "antd";
import routes from "./react-router/router_test";
//引入一些模块
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
const { Header, Content, Footer } = Layout;
export default class App extends React.Component {
  //
  constructor(props) {
    super(props);

    this.state = {
      path: window.location.pathname,
      show: true,
    };
  }
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
  handleResize = (e) => {
    let e_width = e.target.innerWidth;
    this.handleClientW(e_width, 700);
    // console.log('浏览器窗口大小改变事件', e.target.innerWidth);
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
  gotoHome(params) {
    console.log(params);
    this.setState({
      //修改初始值
      path: window.location.pathname,
    });
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>CN</Menu.Item>
        <Menu.Item>EN</Menu.Item>
        <Menu.Item>HN</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Router>
          <Layout className="layout">
            <Header
              style={{ padding: "0 30px", height: "auto" }}
              className={this.state.show === true ? "" : "hide"}
            >
              <div className="header">
                <div className="header_left">
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={logo}
                    alt=""
                  />
                  <Menu mode="horizontal" selectedKeys={[this.state.path]}>
                    <Menu.Item
                      key="/home"
                      style={{ width: "100px" }}
                      onClick={this.gotoHome.bind(this)}
                    >
                      <Link to="/home">首页</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="/user"
                      style={{ width: "100px" }}
                      onClick={this.gotoHome.bind(this)}
                    >
                      <Link to="/user">农场</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="/shop"
                      style={{ width: "100px" }}
                      onClick={this.gotoHome.bind(this)}
                    >
                      <Link to="/shop">规则</Link>
                    </Menu.Item>
                  </Menu>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "250px",
                  }}
                >
                  <Acount></Acount>
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                      LANGUAGE <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </Header>
            <Header
              style={{ padding: "0 10px", lineHeight: "40px" }}
              className={this.state.show === false ? "" : "hide"}
            >
              <div className="header">
                <img src={logo} alt="" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "200px",
                  }}
                >
                  <Acount></Acount>
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                      LANGUAGE <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </div>
              <div className="navBox">
                <Menu
                  mode="horizontal"
                  defaultSelectedKeys={this.state.path}
                  selectedKeys={[this.state.path]}
                >
                  <Menu.Item key="/home" onClick={this.gotoHome.bind(this)}>
                    <Link to="/home">首页</Link>
                  </Menu.Item>
                  <Menu.Item key="/user" onClick={this.gotoHome.bind(this)}>
                    <Link to="/user">农场</Link>
                  </Menu.Item>
                  <Menu.Item key="/shop" onClick={this.gotoHome.bind(this)}>
                    <Link to="/shop">规则</Link>
                  </Menu.Item>
                </Menu>
              </div>
            </Header>
            <Content style={{ padding: "0 10%" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  {" "}
                  <Icon type="link"></Icon>
                </Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              {routes.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route
                      key={key}
                      exact
                      path={route.path}
                      // route.component     value.component   <User  {...props}  routes={route.routes} />
                      render={(props) => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} />
                      )}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={key}
                      path={route.path}
                      render={(props) => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} />
                      )}
                    />
                  );
                }
              })}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Router>
        <div>
          <header className="title"></header>
        </div>
      </div>
    );
  }
}
