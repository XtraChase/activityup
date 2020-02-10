import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import FilteredEvents from "./components/FilteredEvents";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import Group from "./components/Group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    authenticated: false,
    username: null,
    category: "",
    APIevents: []
  };

  componentDidMount() {
    this.getUser();
    this.getEvents();
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

  // Gets events from Ticketmaster
  getEvents = () => {
    API.getAdvertisedEvents()
      .then(response => this.setState({ APIevents: response.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            authenticated={this.state.authenticated}
            username={this.state.username}
            updateUser={() => this.getUser()}
          />
          <Route
            exact
            path="/"
            component={() => <Home />}
            key={"root" + Date.now()}
          />
          <Route
            path="/filteredevents/:category"
            component={props => (
              <FilteredEvents {...props} APIevents={this.state.APIevents} />
            )}
            key={"activity" + Date.now()}
          />
          <Route
            path="/login"
            component={() => (
              <Login
                authenticated={this.state.authenticated}
                updateUser={() => this.getUser()}
              />
            )}
            key={"login" + Date.now()}
          />
          <Route
            path="/register"
            component={() => <Register />}
            key={"register" + Date.now()}
          />
          <Route
            path="/forgotpassword"
            component={() => <ForgotPassword />}
            authenticated={this.state.authenticated}
            key={"forgotpassword" + Date.now()}
          />
          <Route
            path="/dashboard"
            component={() => <Dashboard />}
            key={"dashboard" + Date.now()}
          />
          <Route
            path="/group/:groupid"
            component={props => <Group {...props} />}
            key={"group" + Date.now()}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
