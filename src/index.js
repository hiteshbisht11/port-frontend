import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import { Provider as AlertProvider, positions, transitions } from "react-alert";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 4000,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
