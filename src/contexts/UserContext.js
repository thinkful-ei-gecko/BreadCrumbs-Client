import React, { Component } from 'react';
import TokenService from "../services/token-service";

const UserContext = React.createContext({
  isLoggedIn:false,
  error: null,
  setError: () => {},
})

export default UserContext

export class UserProvider extends Component {
  state ={
    error:null,
    isLoggedIn:false,
  }

  refreshLoginState = () => {
    this.setState({ isLoggedIn:TokenService.hasAuthToken() });
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  render(){
    const value = {
      error: this.state.error,
      isLoggedIn: this.state.isLoggedIn,
      setError: this.setError,
      refreshLoginState: this.refreshLoginState,

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