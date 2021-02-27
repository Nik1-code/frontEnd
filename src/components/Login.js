import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    value: "",
  };

  //email validation
  submit() {}
  isValidEmail(email) {
    console.log(email);
    if (email === "") {
      this.setState({ emailError: " Email cannot be empty" });
      return false;
    } else {
      const emailRegEx = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
      const isValidEmail = emailRegEx.test(email);
      if (!isValidEmail) {
        this.setState({ emailError: "please enter valid email" });
        return false;
      } else {
        return true;
      }
    }
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value, emailError: "" });
  }

  //password validation
  isValidPassword(password) {
    if (password === "") {
      this.setState({ passwordError: "Password cannot be empty." });
      return false;
    } else {
      const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$/;
      const isValidPassword = passwordRegEx.test(password);
      if (!isValidPassword) {
        this.setState({
          passwordError:
            "Password length should be min 6 and max 12 letters with atleast 1 uppercase and 1 lowercase letter and 1 digit.",
        });
        return false;
      } else {
        return true;
      }
    }
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value, passwordError: "" });
  }

  login() {
    const emailFlag = this.isValidEmail(this.state.email);
    const passwordFlag = this.isValidPassword(this.state.password);
    if (emailFlag && passwordFlag) {
      alert("successful");
    }
  }

  //enable/disable button
  enableButton() {
    if (!this.state.email && !this.state.password) {
      return true;
    } else if (!this.state.email) {
      return true;
    } else if (!this.state.password) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <div className="App-header" id="Login">
          <h1 className="App-text">This is Login Page!</h1>
          <h2 className="loginName">Login </h2>

          <input
            type="email"
            placeholder="email"
            onChange={(event) => this.onChangeEmail(event)}
          />
          <h3 className="showError">{this.state.emailError}</h3>
          <input
            type="password"
            placeholder="password"
            onChange={(event) => this.onChangePassword(event)}
          />
          <h3 className="showError">{this.state.passwordError}</h3>

          <button
            className="testClass"
            onClick={() => this.login()}
            disabled={this.enableButton()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
