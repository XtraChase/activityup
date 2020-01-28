import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ActivityType from "./components/ActivityType";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
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
        this.setState({
          authenticated: true,
          username: response.data.user.username
        });
      } else {
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
            component={() => (
              <Home
                authenticated={this.state.authenticated}
                username={this.state.username}
              />
            )}
            key={"root" + Date.now()}
          />

          <Route
            path="/activity"
            component={() => (
              <ActivityType authenticated={this.state.authenticated} />
            )}
            authenticated={this.state.authenticated}
            key={"activity" + Date.now()}
          />

          <Route
            path="/login"
            component={() => (
              <Login
                authenticated={this.state.authenticated}
                username={this.state.username}
                updateUser={() => this.getUser()}
              />
            )}
            key={"login" + Date.now()}
          />

          <Route
            path="/register"
            component={() => (
              <Register
                authenticated={this.state.authenticated}
                username={this.state.username}
              />
            )}
            key={"register" + Date.now()}
          />

          <Route
            path="/forgotpassword"
            component={() => (
              <ForgotPassword authenticated={this.state.authenticated} />
            )}
            authenticated={this.state.authenticated}
            key={"forgotpassword" + Date.now()}
          />

          <Route
            path="/dashboard"
            component={() => (
              <Dashboard
                authenticated={this.state.authenticated}
                username={this.state.username}
              />
            )}
            key={"dashboard" + Date.now()}
            user={this.state.username}
          />

          <Route
            path="/group"
            component={() => (
              <Group
                authenticated={this.state.authenticated}
                username={this.state.username}
              />
            )}
            key={"group" + Date.now()}
          />
        </div>
      </Router>
    );
  }
}

export default App;
