import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import { to, routes } from "./platform/routes";

import "./assets/styles/index.scss";

class App extends Component {
  state = {
    generalAPILoaded: false
  };
  componentDidMount() {
    //? For SSR to fully load Browser API (general for 'window')
    window.routerHistory = createBrowserHistory();
    window.scrollTo(0, 0);    this.setState({ generalAPILoaded: true });
  }

  render() {
    const { generalAPILoaded } = this.state;
    return generalAPILoaded ? (
      <Router history={window.routerHistory}>
        <Switch>
          {routes.map((item, i) => (
            <Route
              key={i}
              exact={item.exact}
              component={item.component}
              path={item.path}
            />
          ))}

          <Redirect to={to.signIn} />
        </Switch>
      </Router>
    ) : null;
  }
}

export default App;
