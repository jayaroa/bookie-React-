import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import HomeLayout from "layouts/Home";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" render={(props) => <HomeLayout {...props} />} />
      <Redirect from="/" to="/home/sports" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
