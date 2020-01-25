import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Group from "./components/Group";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    authenticated: false,
    username: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    API.getUser().then(response => {
      if (response.data.user) {
        console.log("(App.js)Logged in as: " + response.data.user);
        this.setState({
          authenticated: true,
          username: response.data.user.username
        });
      } else {
        console.log("App.js: no user");
        this.setState({ authenticated: false, username: null });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={() => <Home authenticated={this.state.authenticated} />}
            key={"root" + Date.now()}
          />
          <Route
            path="/login"
            component={() => <Login authenticated={this.state.authenticated} />}
            authenticated={this.state.authenticated}
            key={"login" + Date.now()}
          />
          <Route
            path="/register"
            component={() => <Register authenticated={this.state.authenticated} />}
            authenticated={this.state.authenticated}
            key={"register" + Date.now()}
          />
          <Route
            path="/dashboard"
            component={() => <Dashboard authenticated={this.state.authenticated} />}
            key={"dashboard" + Date.now()}
            user={this.state.username}
          />
          <Route
            path="/group"
            component={() => <Group authenticated={this.state.authenticated} />}
            authenticated={this.state.authenticated}
            key={"group" + Date.now()}
          />
        </div>
      </Router>
    );
  }
}

export default App;
