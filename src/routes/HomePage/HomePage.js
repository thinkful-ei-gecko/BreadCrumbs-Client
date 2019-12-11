import React, { Component } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import OvenItem from '../../components/OvenItem/OvenItem';
import ArticlesApiService from '../../services/articles-api-service'
import TokenService from '../../services/token-service';
import ArticlesContext from '../../contexts/ArticlesContext'
import config from '../../config'
import './HomePage.css';
import store from '../../components/Store/Store'

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
     ArticlesApiService.getArticlesList()
       .then( data => {
        this.context.setPopularArticlesList(data);
      })
      .then(this.setState({ ovenPage: true }))
  }
  
  handleTopNews(){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.REACT_APP_API_KEY}`)
    .then(res=>res.json())     
    .then(data => { 
      console.log(data.articles)
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
    const ovenArticles = this.context.popularArticleList || []
    console.log(ovenArticles)
    return (
      ovenArticles.map((article,idx) =>
        <OvenItem
          key={idx}
          article_id={article.id}
          author={article.author}
          source={article.source_name}
          content={article.content}
          description={article.description}
          id={article.id}
          title={article.title}
          url={article.url}
          url_to_image={article.url_to_image}
          vote_count={article.vote_count}
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
    source={article.source.name}
    content={article.content}
    description={article.description}
    id={article.id}
    title={article.title}
    url={article.url}
    url_to_image={article.urlToImage}
    publishedAt={article.publishedAt}
    />
  );
 }

  render() {
    return (
      <section>
        <div className='articleQueryContainer'>
          <ul className='categories'>
            <li className='category' onClick={() => this.handleOvenNews()}>The Oven</li>
            <div className='mobile-dropdown'>
              <li className='category' onClick={() => this.handleTopNews()}>Top News</li>
              <ul className='dropdown-content'>
                <li className='category' onClick={() => this.handleNewNews('business')}>Business</li>
                <li className='category' onClick={() => this.handleNewNews('health')}>Health</li>
                <li className='category' onClick={() => this.handleNewNews('science')}>Science</li>
                <li className='category' onClick={() => this.handleNewNews('sports')}>Sports</li>
                <li className='category' onClick={() => this.handleNewNews('technology')}>Technology</li>
              </ul>
            </div>
          </ul>
        </div>
        <div className='articleContainer'>
          {this.state.ovenPage ? this.renderOvenArticlesToPage() : this.renderArticlesToPage()}
        </div>
      </section>
    )
  }
}