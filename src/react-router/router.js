//引入react jsx写法的必须
import React from "react";
//引入需要用到的页面组件
import App from "../App";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Test from "../pages/test/test";
//引入一些模块
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

let router = [
  {
    path: "/", //首页默认加载的页面
    componentName: App,
    exact: true, //是否为严格模式
  },
  {
    path: "/home", //首页默认加载的页面
    componentName: Home,
    exact: true, //是否为严格模式
  },
  {
    path: "/about", //首页默认加载的页面
    componentName: About,
    exact: true, //是否为严格模式
  },
  {
    path: "/test", //首页默认加载的页面
    componentName: Test,
    exact: true, //是否为严格模式
  },
];

export default router;
