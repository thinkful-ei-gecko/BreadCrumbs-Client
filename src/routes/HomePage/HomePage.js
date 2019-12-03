import React, { Component } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'
import './HomePage.css';

export default class HomePage extends Component {
  static contextType = ArticlesContext;
  componentDidMount() {
    
    ArticlesApiService.getArticlesList()
      .then(res => {
        console.log(res)
        this.context.setArticlesList(res);
      })
      .catch(this.context.setError);
  }

  renderArticlesToPage() {
    const { articlesList = [] } = this.context;
    return articlesList.map((article,idx) =>
    <NewsItem
    key={idx}
    author={article.author}
    content={article.content}
    description={article.description}
    downvote_count={article.downvote_count}
    id={article.id}
    title={article.title}
    upvote_count={article.upvote_count}
    url={article.url}
    url_to_image={article.url_to_image}
    user_id={article.user_id}
    />
  );
  }

  render() {
    return (
      <section>
        <div className='articleQueryContainer'>
          <span>Top News</span>
          <span>Technology</span>
          <span>Sports</span>
          <span>Business</span>
        </div>
        <div className='articleContainer'>
          {this.renderArticlesToPage()}
          
        </div>
      </section>
    )
  }
}