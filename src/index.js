import React from "react";
import ReactDOM, { Component } from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
/**之前的代码**/
import store from "./store/index";

ReactDOM.render(
  <div>
    <App></App>
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
