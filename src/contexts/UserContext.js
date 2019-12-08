import React, { Component } from 'react';
import TokenService from "../services/token-service";

const UserContext = React.createContext({
  isLoggedIn: false,
  user: '',
  error: null,
  setUser: () => {},
  setError: () => {},
  clearError: () => {},
  processLogin: () => {},
  processLogout: () => {},
  refreshLoginState: () => {}
});

export default UserContext

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    const state = { user: {}, error: null }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
      }

    this.state = state;
  };

  refreshLoginState = () => {
    this.setState({ isLoggedIn:TokenService.hasAuthToken() });
  };

  setUser = user => {
    this.setState({ user: user })
  };

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub,
    })
  };

  processLogout = () => {
    TokenService.clearAuthToken()
    this.setUser({})
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  };

  clearError = () => {
    this.setState({ error: null })
  };

  render(){
    const value = {
      user: this.state.user,
      error: this.state.error,
      isLoggedIn: this.state.isLoggedIn,
      setUser: this.setUser,
      setError: this.setError,
      clearError: this.clearError,
      processLogin: this.processLogin,
      refreshLoginState: this.refreshLoginState,
      processLogout: this.processLogout
    }
    return(
      <div>
        <UserContext.Provider value={value}>
          {this.props.children}
        </UserContext.Provider>
      </div>
    )
  }
}