import React, { Component } from 'react';


const ArticlesContext = React.createContext({
  articlesList: [],
  savedArticlesList: [],
  popularArticleList: [],
  articleComments: [],
  error: null,
  setError: () => {},
  setSavedArticlesList: () => {},
  setPopularArticlesList: () => {},
  setArticlesList: () => {},
  setArticleComments: () => {}
})

export default ArticlesContext

export class ArticlesContextProvider extends Component {
  state={
    articlesList: [],
    savedArticlesList: [],
    popularArticleList: [],
    articleComments: [],
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

  setArticleComments = comments => {
    this.setState({ comments })
  }

  render() {
    const value ={
      articlesList: this.state.articlesList,
      popularArticleList: this.state.popularArticleList,
      savedArticlesList: this.state.savedArticlesList,
      articleComments: this.state.articleComments,
      error: this.state.error,
      setArticlesList: this.setArticlesList,
      setSavedArticlesList: this.setSavedArticlesList,
      setPopularArticlesList: this.setPopularArticlesList,
      setArticleComments: this.setArticleComments,
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
