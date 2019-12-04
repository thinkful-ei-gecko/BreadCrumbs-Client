import React, { Component } from 'react';


const ArticlesContext = React.createContext({
  articlesList: [],
  buisnessArticlesList:[],
  savedArticlesList: [],
  newsArticleList: [],
  error: null,
  setError: () => {},
  setSavedArticlesList: () => {},
  setNewsArticlesList: () => {},
  setArticlesList: () => {},
  setBuisnessArticlesList:()=>{}
})

export default ArticlesContext

export class ArticlesContextProvider extends Component {
  state={
    articlesList: [],
    savedArticlesList: [],
    newsArticleList: [],
    buisnessArticlesList:[],
    error: null
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  setArticlesList = articlesList => {
    this.setState({ articlesList })
  }

  setBuisnessArticlesList = articlesList => {
    this.setState({ articlesList })
  }
  setSavedArticlesList = savedArticlesList => {
    this.setState({ savedArticlesList })
  }

  render() {
    const value ={
      articlesList:this.state.articlesList,
      buisnessArticlesList:this.state.buisnessArticlesList,
      savedArticlesList:this.state.savedArticlesList,
      error: this.state.error,
      setArticlesList:this.setArticlesList,
      setBuisnessArticlesList:this.setBuisnessArticlesList,
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
