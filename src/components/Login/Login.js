import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import UserAndArticlesContext from "../../contexts/UserAndArticlesContext";
import "../../routes/LoginPage/LoginPage.css";

export default class Login extends Component {
  static contextType = UserAndArticlesContext;
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      username: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
      })
      .then(() => {
        this.context.refreshLoginState();
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h2> Login </h2>
        <form className="login-reg" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <label htmlFor="Login-username"> Username: </label>
          <input
            className="input user_in"
            aria-label="Login-username"
            placeholder="Username"
            name="user_name"
            type="text"
            required
          ></input>
          <label htmlFor="Login-password"> Password: </label>
          <input
            className="input"
            aria-label="Login-password"
            placeholder="PASSWORD"
            name="password"
            type="password"
            required
          ></input>
          <button className="loginRegBtn" type="submit">
            login
          </button>
        </form>
      </div>
    );
  }
}
