import React, { Component } from "react";
import AuthApiService from '../../services/auth-api-service';

export default class Login extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {}
  };
  state = { error: null };
  handleSubmit = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = "";
        password.value = "";
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
              <form onSubmit={this.handleSubmit}>
              <div role="alert">{error && <p>{error}</p>}</div>
                  <label htmlFor='Signup-username'> Username</label> 
                  <input aria-label='Signup-username' name='user_name' type='text' required ></input>
                  <label htmlFor='Signup-password' name='password'> Password</label> 
                  <input aria-label='Signup-password' type='text' required ></input>
                  <button type='submit'>Sign Up</button>
              </form>
          </div>
      )
  }
}