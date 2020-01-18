import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Header from "./components/Layout/Home/Header";
import Body from "./components/Layout/Home/Body";
import Footer from "./components/Layout/Home/Footer";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
