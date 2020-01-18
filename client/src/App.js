import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Header from "./components/Layout/Home/Header";
import Body from "./components/Layout/Home/Body";
import Footer from "./components/Layout/Home/Footer";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Group from "./components/Pages/Group";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Header />
                <Body />
                <Footer />
              </React.Fragment>
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/group" component={Group} />
        </div>
      </Router>
    );
  }
}

export default App;
