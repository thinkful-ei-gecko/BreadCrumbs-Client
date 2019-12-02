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
    title={article.title}
    content={article.content}
    imageUrl={article.url_to_image}
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