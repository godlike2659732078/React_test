import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
ReactDOM.render(
  <div>
    <App></App>
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
