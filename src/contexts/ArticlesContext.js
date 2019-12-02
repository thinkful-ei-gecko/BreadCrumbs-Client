import React, { Component } from 'react';
import TokenService from "../services/token-service";

const ArticlesContext = React.createContext({
  articlesList: [],
  savedArticlesList: [],
  newsArticleList: [],
  error: null,
  setError: () => {},
  setSavedArticlesList: () => {},
  setNewsArticlesList: () => {},
  setArticlesList: () => {}
})

export default ArticlesContext

export class ArticlesContextProvider extends Component {
  state={
    articlesList: [],
    savedArticlesList: [],
    newsArticleList: [],
    error: null
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  setArticlesList = articlesList => {
    this.setState({ articlesList })
  }

  render() {
    const value ={
      articlesList:this.state.articlesList,
      error: this.state.error,
      setArticlesList:this.setArticlesList,
      setError: this.setError,
    }
    return (
      <div>
        <ArticlesContext.Provider value={value}>
          {this.props.children}
        </ArticlesContext.Provider>
      </div>
    )
  }
}
