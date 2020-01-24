import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard";
import Group from "./components/Group";
<<<<<<< HEAD
import "./App.css";
=======
import API from "./utils/API";
import "./App.scss";
>>>>>>> 0d0741e5740b552e2bb23e9d495811d53ed97505

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
        console.log(response.data.user);
        this.setState({
          authenticated: true,
          username: response.data.user.username
        });
      } else {
        console.log("no user");
        this.setState({ authenticated: false, username: null });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} key={"root" + Date.now()} />
          <Route path="/login" component={Login} key={"login" + Date.now()} />
          <Route
            path="/register"
            component={Register}
            key={"register" + Date.now()}
          />
          <Route
            path="/dashboard"
            component={Dashboard}
            key={"dashboard" + Date.now()}
          />
          <Route path="/group" component={Group} key={"group" + Date.now()} />
        </div>
      </Router>
    );
  }
}

export default App;
