import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./styles.css";
	

	class Login extends Component {
		constructor(props) {
			super(props);
	
			this.state = {
				email: '',
				password: ''
			};
	
			this.update = this.update.bind(this);
			this.displayLogin = this.displayLogin.bind(this);
		}
	
		update(e) {
			let name = e.target.name;
			let value = e.target.value;
			this.setState({
				[name]: value
			});
		}
	
		displayLogin(e) {
			e.preventDefault();
			console.log('You are logged in');
			console.log(this.state);
			this.setState({
				email: '',
				password: ''
			});
		}
	
		render() {
			return (
				<>
			<div className="col">
				<div className="login">
					<form onSubmit={this.displayLogin}>
						<h2>Login</h2>
						<div className="username">
							<input
								type="text"
								placeholder="Username..."
								value={this.state.email}
								onChange={this.update}
								name="email"
							/>
						</div>
						<div className="password">
							<input
								type="password"
								placeholder="Password..."
								value={this.state.password}
								onChange={this.update}
								name="password"
							/>
						</div>
						<input type="submit" value="Login" />
					</form>
				</div>
			</div>
			<div className="col">
				<div className="oAuthlogin">
					<form>
          				<Link> 
           				<FacebookLoginButton onClick={() => alert("Hello")} />
           				<GoogleLoginButton onClick={() => alert("Hello")} />
         			</Link>
				 	</form>
				 </div>
			</div>
	
			<div class="bottom-container">
  				<div class="row">
   					<div class="col">
				    	<a href="#" className="btn">Sign up</a>
    				</div>
    				<div class="col">
      					<a href="#" className="btn">Forgot password?</a>
    				</div>
  				</div>
			</div>
			</>
			);
		}
	}
	

	export default Login;
