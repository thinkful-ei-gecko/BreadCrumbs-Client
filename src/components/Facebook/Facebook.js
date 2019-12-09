import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service';

export default class Facebook extends Component {

    static contextType = UserContext;
    static defaultProps = {
      onLoginSuccess: () => {},
      location: {},
      history: {
        push: () => {},
      }
    }
  
    state = { 
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        error: null 
    }

      handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
      };

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
        this.context.setUser(this.state.name)
        this.context.refreshLoginState();
        this.props.onLoginSuccess()
        const { location, history } = this.props
        history.push('/')
    }

    render() {
    let fbContent
    const { error } = this.state

    if(TokenService.hasAuthToken()) {
      fbContent = null
    }else {
      fbContent = (<FacebookLogin
        appId="589520928496131"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />)

    }

    return (<div>{fbContent}</div>)
    }

}