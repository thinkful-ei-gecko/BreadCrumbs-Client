import React, { Component } from "react";
import AuthApiService from '../../services/auth-api-service';
import './Registration.css';

export default class Login extends Component {
  state = { 
    error: null
  };

  static defaultProps = {
    onSignUpSuccess: () => {}
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { user_name, password, fullname } = ev.target;
    this.setState({ error: null });

    AuthApiService.postUser({
      username: user_name.value,
      password: password.value,
      name: fullname.value
    })
      .then(user => {
        user_name.value = "";
        password.value = "";
        fullname.value = "";
        this.props.onSignUpSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <div>
        <h2>Register </h2>
        <form className="login-reg" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p>{error}</p>}</div>
          <label htmlFor="Signup-username">
            Username:
          </label>
          <input
            className="input"
            aria-label="Signup-username"
            name="user_name"
            placeholder='Username'
            type="text"
            required
          ></input>
          <label htmlFor="Signup-fullname">
            Full Name:
          </label>
          <input
            className="input"
            aria-label="Signup-fullname"
            name="fullname"
            placeholder='Full-name'
            type="text"
            required
          ></input>
          <label htmlFor="Signup-password" name="password">
            Password:
          </label>
          <input
            className="input"
            aria-label="Signup-password"
            name="password"
            placeholder='Password'
            type="password"
            required
          ></input>
          <button className="loginRegBtn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
