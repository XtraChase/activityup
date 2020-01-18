import React, { Component } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <>
      <div className="col">
          <p>Or sign in manually:</p>
        <div>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="submit" value="Login" />
        </div>
      </div>

      <div className="col">
        <Link> 
          <FacebookLoginButton onClick={() => alert("Hello")} />
          <GoogleLoginButton onClick={() => alert("Hello")} />
        </Link>
    </div>
 <div className="bottom-container">
 <div className="row">
   <div className="col">
     <a href="#" className="btn">Sign up</a>
   </div>
   <div className="col">
     <a href="#"  className="btn">Forgot password?</a>
   </div>
 </div>
</div>
</>
    );
  }
}


export default Login;
