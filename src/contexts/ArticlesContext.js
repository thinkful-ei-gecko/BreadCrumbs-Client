import React, { Component } from 'react';


const ArticlesContext = React.createContext({
  articlesList: [],
  savedArticlesList: [],
  popularArticleList: [],
  error: null,
  setError: () => {},
  setSavedArticlesList: () => {},
  setPopularArticlesList: () => {},
  setArticlesList: () => {}
})

export default ArticlesContext

export class ArticlesContextProvider extends Component {
  state={
    articlesList: [],
    savedArticlesList: [],
    popularArticleList: [],
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

  setPopularArticlesList = popularArticleList => {
    this.setState({ popularArticleList })
  }

  render() {
    const value ={
      articlesList: this.state.articlesList,
      savedArticlesList: this.state.savedArticlesList,
      error: this.state.error,
      setArticlesList: this.setArticlesList,
      setSavedArticlesList: this.setSavedArticlesList,
      setPopularArticlesList: this.setPopularArticlesList,
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
