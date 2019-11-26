import React, { Component } from 'react';
import TokenService from "../services/token-service";

const Context = React.createContext({
  isLoggedIn:false,
  error: null,
  setError: () => {},
})

export default Context

export class ContextProvider extends Component {
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
        <Context.Provider value={value}>
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}