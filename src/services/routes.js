import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/HomePage";
import Info from "../pages/InfoPage";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  );
};
