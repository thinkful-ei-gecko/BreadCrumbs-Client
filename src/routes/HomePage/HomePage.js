import React, { Component } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import OvenItem from '../../components/OvenItem/OvenItem';
import ArticlesApiService from '../../services/articles-api-service'
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext'
import config from '../../config'
import './HomePage.css';


export default class HomePage extends Component {
  state = {
    ovenPage: true
  }

  static contextType = UserAndArticlesContext;

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

  handleMobileDropdownClick = (ev) => {
    ev.preventDefault();
    const keyword = ev.target.value;
    
    if (keyword === 'The Oven') {
      return this.handleOvenNews()
    }
    else if (keyword === 'Top News') {
      return this.handleTopNews()
    }
    else {
      return this.handleNewNews(keyword);
    }
  }

 renderMobileDropdown = () => {
   return (
     <select className='mobile-view-select-menu' onClick={this.handleMobileDropdownClick}>
       <option value='The Oven'>The Oven</option>
       <option value='Top News'>Top News</option>
       <option value='business'>Business</option>
       <option value='health'>Health</option>
       <option value='science'>Science</option>
       <option value='sports'>Sports</option>
       <option value='technology'>Technology</option>
     </select>
   )
 }

  render() {
    return (
      <section>
        {this.renderMobileDropdown()}
        <div className='articleQueryContainer tablet-and-desktop-view'>
          <ul>
            <li className='category' onClick={() => this.handleOvenNews()}>The Oven</li>
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