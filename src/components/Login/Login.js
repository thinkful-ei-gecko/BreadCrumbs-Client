import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext'

export default class Login extends Component {
  static contextType = UserContext;
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  handleSubmitJwtAuth = (ev) =>{
    ev.preventDefault()
    const { user_name, password } = ev.target
    
    AuthApiService.postLogin({
      username: user_name.value,
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
        return (
            <div>
              <h2> Login </h2>
              <form className='login-reg' onSubmit={this.handleSubmitJwtAuth}>
                <label htmlFor='Login-username'> Username: </label> 
                <input className='input' aria-label='Login-username' name='user_name' type='text' required ></input>
                <label htmlFor='Login-password'> Password: </label> 
                <input className='input' aria-label='Login-password' name='password' type='password' required ></input>
                <button className='loginRegBtn' type='submit'>login</button>
              </form>
            </div>
        )
    }
}