import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch } from "react-router-dom";

import store from "stores/configureStore";
import { Provider } from "react-redux";

import history from "utils/history";

import App from "./App";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <App />
        </Switch>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);
