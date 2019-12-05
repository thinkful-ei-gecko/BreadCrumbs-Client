import React, { Component } from 'react';


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

  setSavedArticlesList = savedArticlesList => {
    this.setState({ savedArticlesList })
  }

  render() {
    const value ={
      articlesList:this.state.articlesList,
      savedArticlesList:this.state.savedArticlesList,
      error: this.state.error,
      setArticlesList:this.setArticlesList,
      setSavedArticlesList :this.setSavedArticlesList ,
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
