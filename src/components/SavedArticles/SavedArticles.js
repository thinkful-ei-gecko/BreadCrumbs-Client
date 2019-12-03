import React, { Component } from 'react'
import NewsItem from '../../components/NewsItem/NewsItem';
import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'

export default class SavedArticles extends Component {
  static contextType = ArticlesContext;
  componentDidMount() {
    
    ArticlesApiService.getSavedArticlesList()
      .then(res => {
        console.log('saved articles',res)
        this.context.setSavedArticlesList(res);
      })
      .catch(this.context.setError);
  }

  renderSavedArticlesToPage() {
    const { savedArticlesList = [] } = this.context;
    return savedArticlesList.map((article,idx) =>
    <NewsItem
    key={idx}
    author={article.author}
    content={article.content}
    description={article.description}
    downvote_count={article.downvote_count}
    upvote_count={article.upvote_count}
    title={article.title}
    url={article.url}
    url_to_image={article.url_to_image}
    user_id={article.user_id}
    />
  );
  }

  render() {
    return (
      <div>
        <h2>Saved Articles</h2>
        {this.renderSavedArticlesToPage()}    
      </div>
    )
  }
}
