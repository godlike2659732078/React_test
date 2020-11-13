import React from "react";
import logo from "./assets/img/logo1.png";
import Acount from "./components/wallet/wallet";
import "./App.css";
import "antd/dist/antd.css";
import ENIcon from "./assets/img/english.png";
import HKIcon from "./assets/img/hongk.png";
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from "antd";
import routes from "./react-router/router_test";
//引入路由组件
import { HashRouter as Router, Route, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
export default class App extends React.Component {
  //
  constructor(props) {
    super(props);

    this.state = {
      path: window.location.hash,
      show: true,
      Url: [
        { id: 1, name: "Telegram", url: "www.baidu.com" },
        { id: 2, name: "Discord", url: "#" },
        { id: 3, name: "Twitter", url: "#" },
        { id: 4, name: "Medium", url: "#" },
      ],
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
    this.setState = (state, callback) => {
      return;
    };
  }
  // 渲染完成
  componentDidMount() {
    console.log(window);
    window.addEventListener("resize", this.handleResize.bind(this)); //监听窗口大小改变
    let clientW = document.documentElement.clientWidth;
    this.handleClientW(clientW, 1040);
    if (window.location.hash === "#/") {
      this.setState({
        //修改初始值
        path: "#/home",
      });
    }
  }
  gotoHome(params) {
    console.log(window.location);
    console.log(params);
    this.setState({
      //修改初始值
      path: window.location.hash,
    });
  }
  render() {
    const menu = (
      // 语言切换下拉框
      <Menu>
        <Menu.Item>
          <img className="country" src={ENIcon} alt="" />
          EN
        </Menu.Item>
        <Menu.Item>
          <img className="country" src={HKIcon} alt="" />
          CN
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Router>
          <Layout className="layout">
            {/* 头部导航栏 */}
            <Header
              style={{ padding: "0 30px", height: "68px" }}
              className={this.state.show === true ? "" : "hide"}
            >
              <div className="header">
                <div className="header_left">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "60px",
                    }}
                    src={logo}
                    alt=""
                  />
                  {/* 导航条 */}
                  <Menu mode="horizontal" selectedKeys={[this.state.path]}>
                    <Menu.Item
                      key="#/home"
                      style={{
                        width: "100px",
                        fontSize: "16px",
                      }}
                      onClick={this.gotoHome.bind(this)}
                    >
                      <Link to="/home">首页</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="#/forest"
                      style={{
                        width: "100px",
                        fontSize: "16px",
                      }}
                      onClick={this.gotoHome.bind(this)}
                    >
                      <Link to="/forest">农场</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="#/rules"
                      style={{
                        width: "100px",
                        fontSize: "16px",
                      }}
                      onClick={this.gotoHome.bind(this)}
                    >
                      <Link to="/rules">规则</Link>
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
                  {/* 钱包组件 */}
                  <Acount></Acount>

                  {/* 语言切换下拉框 */}
                  <Dropdown overlay={menu}>
                    <a
                      className="ant-dropdown-link"
                      style={{ color: "#1890ff" }}
                    >
                      LANGUAGE <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </Header>
            {/* 小窗口导航栏 */}
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
                    <a className="ant-dropdown-link">
                      LANGUAGE <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </div>
              <div className="navBox">
                {/* 导航条 */}
                <Menu
                  mode="horizontal"
                  defaultSelectedKeys={this.state.path}
                  selectedKeys={[this.state.path]}
                >
                  <Menu.Item key="#/home" onClick={this.gotoHome.bind(this)}>
                    <Link to="/home">首页</Link>
                  </Menu.Item>
                  <Menu.Item key="#/forest" onClick={this.gotoHome.bind(this)}>
                    <Link to="/forest">农场</Link>
                  </Menu.Item>
                  <Menu.Item key="#/rules" onClick={this.gotoHome.bind(this)}>
                    <Link to="/rules">规则</Link>
                  </Menu.Item>
                </Menu>
              </div>
            </Header>
            {/* 页面主题内容部分 */}
            <Content className="layout_content" style={{ padding: "0 10%" }}>
              <div className={this.state.show === false ? "hidden" : "ghost"}>
                <div className="ghostBody"></div>
              </div>
              {/* 路由 */}
              {routes.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route
                      key={key}
                      exact
                      path={route.path}
                      // route.component     value.component   <forest  {...props}  routes={route.routes} />
                      render={(props) => (
                        // pass the sub-routes down to keep nesting
                        <route.component
                          {...props}
                          routes={route.routes}
                          onRef={(ref) => (this.child = ref)}
                        />
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
                        <route.component
                          {...props}
                          routes={route.routes}
                          onRef={(ref) => (this.child = ref)}
                        />
                      )}
                    />
                  );
                }
              })}
            </Content>
            {/* 底部栏 */}
            <Footer
              style={{
                textAlign: "center",

                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <ul className="footer_box">
                {this.state.Url.map(function (val) {
                  return (
                    <li key={val.id}>
                      <a href={"http://" + val.url}>{val.name}</a>
                    </li>
                  );
                })}
              </ul>
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
