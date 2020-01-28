// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Map from './Map';
// import API from "../../utils/API";
// import { Auth } from "aws-amplify";

// class ForgotPassword extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       code: "",
//       email: "",
//       password: "",
//       codeSent: false,
//       confirmed: false,
//       confirmPassword: "",
//       isConfirming: false,
//       isSendingCode: false
//     };
//   }

//   validateCodeForm() {
//     return this.state.email.length > 0;
//   }

//   validateResetForm() {
//     return (
//       this.state.code.length > 0 &&
//       this.state.password.length > 0 &&
//       this.state.password === this.state.confirmPassword
//     );
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   };

//   handleSendCodeClick = async event => {
//     event.preventDefault();

//     this.setState({ isSendingCode: true });

//     try {
//       await Auth.forgotPassword(this.state.email);
//       this.setState({ codeSent: true });
//     } catch (e) {
//       alert(e.message);
//       this.setState({ isSendingCode: false });
//     }
//   };

//   handleConfirmClick = async event => {
//     event.preventDefault();

//     this.setState({ isConfirming: true });

//     try {
//       await Auth.forgotPasswordSubmit(
//         this.state.email,
//         this.state.code,
//         this.state.password
//       );
//       this.setState({ confirmed: true });
//     } catch (e) {
//       alert(e.message);
//       this.setState({ isConfirming: false });
//     }
//   };

//   renderRequestCodeForm() {
//     return (
//       <>
//         <form onSubmit={this.handleSendCodeClick}>
//           <div>
//             <p>Email</p>
//             <input
//               type="email"
//               placeholder="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.update}
//               disabled={!this.validateCodeForm()}
//             />
//             <div className="bottom-container">
//               <Link to="/ForgotPassword" className="col signUp">
//                 <button className="btn signUpBtn">
//                   Please send confirmation code
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </form>
//       </>
//     );
//   }

//   renderConfirmationForm() {
//     return (
//       <form onSubmit={this.handleConfirmClick}>
//         <div>
//           <p>Confirmation Code</p>
//           <input
//             type="tel"
//             value={this.state.code}
//             onChange={this.handleChange}
//             // name= "Please check your email" ({this.state.email}) "for the confirmation"
//           />
//           <div>
//             <p>New Password</p>
//             <input
//               type="new-password"
//               placeholder="new-password"
//               name="new-password"
//               value={this.state.newPassword}
//               onChange={this.update}
//             />
//           </div>
//           <div>
//             <p>Confirm Password</p>
//             <input
//               type="confirmPassword"
//               placeholder="confirmPassword"
//               name="confirmPassword"
//               value={this.state.confirmPassword}
//               onChange={this.update}
//             />
//           </div>
//         </div>
//       </form>
//     );
//   }

//   renderSuccessMessage() {
//     return (
//       <div className="success">
//         <div glyph="ok" />
//         <p>Your password has been reset!</p>
//         <p>
//           <Link to="/Login">The password has been reset!</Link>
//         </p>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="ResetPassword">
//         {!this.state.codeSent
//           ? this.renderRequestCodeForm()
//           : !this.state.confirmed
//           ? this.renderConfirmationForm()
//           : this.renderSuccessMessage()}
//       </div>
//     );
//   }
// }

// export default ForgotPassword;
