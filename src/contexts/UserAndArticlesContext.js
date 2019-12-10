import React, { Component } from 'react';
import TokenService from "../services/token-service";

const UserAndUserAndArticlesContext = React.createContext({
  isLoggedIn: false,
  user: {},
  error: null,
  setUser: () => {},
  setError: () => {},
  clearError: () => {},
  processLogin: () => {},
  processLogout: () => {},
  refreshLoginState: () => {},

  articlesList: [],
  savedArticlesList: [],
  popularArticleList: [],
  articleComments: [],
  setSavedArticlesList: () => {},
  setPopularArticlesList: () => {},
  setArticlesList: () => {},
  setArticleComments: () => {}
});

export default UserAndUserAndArticlesContext

export class UserAndArticlesProvider extends Component {
  constructor(props) {
    super(props)
    const state = { 
      user: {},
      articlesList: [],
      savedArticlesList: [],
      popularArticleList: [],
      articleComments: [],
      error: null
     }

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
    this.setState({ user })
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
  
  setArticlesList = articlesList => {
    this.setState({ articlesList })
  }

  setSavedArticlesList = savedArticlesList => {
    this.setState({ savedArticlesList })
  }

  setPopularArticlesList = popularArticleList => {
    this.setState({ popularArticleList })
  }

  setArticleComments = articleComments => {
    this.setState({ articleComments })
  }

  addComment = newComment => {
    this.setState({ articleComments: [...this.state.articleComments, newComment ] })
  }

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
      processLogout: this.processLogout,

      articlesList: this.state.articlesList,
      popularArticleList: this.state.popularArticleList,
      savedArticlesList: this.state.savedArticlesList,
      articleComments: this.state.articleComments,
      setArticlesList: this.setArticlesList,
      setSavedArticlesList: this.setSavedArticlesList,
      setPopularArticlesList: this.setPopularArticlesList,
      setArticleComments: this.setArticleComments,
      addComment: this.addComment,
    }
    return(
      <div>
        <UserAndUserAndArticlesContext.Provider value={value}>
          {this.props.children}
        </UserAndUserAndArticlesContext.Provider>
      </div>
    )
  }
}