import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext'
import '../../routes/LoginPage/LoginPage.css'
import FacebookLogin from 'react-facebook-login'

// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }


// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
// });


export default class Login extends Component {
  static contextType = UserContext;
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { 
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
    error: null 
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

    componentClicked = () => console.log("clicked")
    
    responseFacebook = response =>  {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      })
      console.log(response)
      TokenService.saveAuthToken(response.accessToken)
        this.context.refreshLoginState();
        this.props.onLoginSuccess()
    }

    render() {
      const { error } = this.state
      let fbContent

      if(this.state.isLoggedIn) {
        fbContent = null
      }else {
        fbContent = (<FacebookLogin
          appId="589520928496131"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />)

      }
        return (
            <div>
              <h2> Login </h2>
              <form className='login-reg' onSubmit={this.handleSubmitJwtAuth}>
              <div role='alert'>
               {error && <p className='error'>{error}</p>}
               </div>
                <label htmlFor='Login-username'> Username: </label> 
                <input className='input' aria-label='Login-username' name='user_name' type='text' required ></input>
                <label htmlFor='Login-password'> Password: </label> 
                <input className='input' aria-label='Login-password' name='password' type='password' required ></input>
                <button className='loginRegBtn' type='submit'>login</button>
              </form>
              {fbContent}
              {/* <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div> */}
{/* 
              <fb:login-button 
                scope="public_profile,email"
                onlogin="checkLoginState();">
              </fb:login-button> */}
            </div>
        )
    }
}