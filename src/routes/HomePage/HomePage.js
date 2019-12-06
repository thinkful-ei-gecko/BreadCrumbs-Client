import React, { Component } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
//import ArticlesApiService from '../../services/articles-api-service'
import TokenService from '../../services/token-service';
import ArticlesContext from '../../contexts/ArticlesContext'
import config from '../../config'
import './HomePage.css';

export default class HomePage extends Component {
  state = {
    ovenPage: false
  }

  static contextType = ArticlesContext;

  componentDidMount() {
    this.handleTopNews()
    this.handleOvenNews()
  }

  handleOvenNews() {
    fetch(`${config.API_ENDPOINT}/article/popular`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
      })
      .then( res => res.json())
      .then( data => {
        this.context.setPopularArticlesList(data);
      })
      .then(this.setState({ ovenPage: true }))
  }
  
  handleTopNews(){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.REACT_APP_API_KEY}`)
    .then(res=>res.json())     
    .then(data => { 
          this.context.setArticlesList(data.articles);
        })
    .then(this.setState({ ovenPage: false }))
  }

  handleNewNews(subject){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${subject}&apiKey=${config.REACT_APP_API_KEY}`)
    .then(res=>res.json())     
    .then(data => { 
          this.context.setArticlesList(data.articles);
        })
    .then(this.setState({ ovenPage: false }))
  } 

  renderOvenArticlesToPage() {
    const ovenArticles = this.context.popularArticleList
    return (
      ovenArticles.map((article) =>
        <NewsItem
          key={article.id}
          author={article.author}
          content={article.content}
          description={article.description}
          id={article.id}
          title={article.title}
          url={article.url}
          url_to_image={article.urlToImage}
        />
      )
    )
  }

  renderArticlesToPage() {
     //const { articlesList = [] } = this.context;
    const articlesList = this.context.articlesList || []
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
          <li className='category' onClick={() => this.handleOvenNews()}>In The Oven</li>
          <li className='category' onClick={() => this.handleTopNews()}>Top News</li>
          <li className='category' onClick={() => this.handleNewNews('business')}>Business</li>
          <li className='category' onClick={() => this.handleNewNews('health')}>Health</li>
          <li className='category' onClick={() => this.handleNewNews('science')}>Science</li>
          <li className='category' onClick={() => this.handleNewNews('sports')}>Sports</li>
          <li className='category' onClick={() => this.handleNewNews('technology')}>Technology</li>
          </ul>
        </div>
        <div className='articleContainer'>
          {this.state.ovenPage ? this.renderOvenArticlesToPage() : this.renderArticlesToPage()}
        </div>
      </section>
    )
  }
}