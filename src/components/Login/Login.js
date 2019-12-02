import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext'
import FB from 'react-facebook-login'

export default class Login extends Component {

  static contextType = UserContext;
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  handleSubmitJwtAuth = (ev) =>{
    ev.preventDefault()
    const { user_name, password } = ev.target
    
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.context.refreshLoginState();
        this.props.onLoginSuccess()
        
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
    render() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
    
        return (
            <div>
              <form onSubmit={this.handleSubmitJwtAuth}>
                <label htmlFor='Login-username'> Username: </label> 
                <input aria-label='Login-username' name='user_name' type='text' required ></input>
                <label htmlFor='Login-password'> Password: </label> 
                <input aria-label='Login-password' name='password' type='password' required ></input>
                <button type='submit'>login</button>
              </form>
              {/* <fb:login-button 
                cope="public_profile,email"
                onlogin="checkLoginState();">
              </fb:login-button> */}
            </div>
        )
    }
}