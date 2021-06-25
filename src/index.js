import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "bootstrap/dist/css/bootstrap.min.css";
import DeviceCards from "./DeviceCards";

import App from "./App";
import "./styles.css";

function render(Component) {
  ReactDOM.render(
    <div id="app">
      <AppContainer>
        <Component />
      </AppContainer>

      <DeviceCards></DeviceCards>
    </div>,

    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
