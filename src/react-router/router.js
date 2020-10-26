//引入react jsx写法的必须
import React from "react";
//引入需要用到的页面组件
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Test from "../pages/test/test";
//引入一些模块
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function router() {
  return (
    <Router>
      <Route path="/" render={() => <Redirect to="/home" />}></Route>
      <Route path="/home" component={Home} />

      <Route
        path="/about"
        render={() => (
          <About>
            <Route path="/about/test" component={Test} />
          </About>
        )}
      ></Route>
    </Router>
  );
}

export default router;
