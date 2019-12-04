import React, { Component } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
//import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'
import config from '../../config'
import './HomePage.css';

export default class HomePage extends Component {
  static contextType = ArticlesContext;

  componentDidMount() {
    this.handleTopNews()
  }
  
  handleTopNews(){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.REACT_APP_API_KEY}`)
    .then(res=>res.json())     
    .then(data => { 
          this.context.setArticlesList(data.articles);
        })
  }

  handleNewNews(subject){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${subject}&apiKey=${config.REACT_APP_API_KEY}`)
    .then(res=>res.json())     
    .then(data => { 
          this.context.setArticlesList(data.articles);
        })
  }

  renderArticlesToPage() {
     //const { articlesList = [] } = this.context;
    const articlesList = this.context.articlesList ||[]
    return articlesList.map((article,idx) =>
    <NewsItem
    key={idx}
    author={article.author}
    content={article.content}
    description={article.description}
    // downvote_count={article.downvote_count}
    id={article.id}
    title={article.title}
    // upvote_count={article.upvote_count}
    url={article.url}
    url_to_image={article.urlToImage}
    // user_id={article.user_id}
    />
  );
  }

  render() {
    return (
      <section>
        <div className='articleQueryContainer'>
          <ul>
          <li onClick={() => this.handleTopNews()}>Top News</li>
          <li onClick={() => this.handleNewNews('business')}>Business</li>
          <li onClick={() => this.handleNewNews('health')}>Health</li>
          <li onClick={() => this.handleNewNews('science')}>Science</li>
          <li onClick={() => this.handleNewNews('sports')}>Sports</li>
          <li onClick={() => this.handleNewNews('technology')}>Technology</li>
          </ul>
        </div>
        <div className='articleContainer'>
          {this.renderArticlesToPage()}
        </div>
      </section>
    )
  }
}