import React, { Component } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
//import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'
import config from '../../config'
import './HomePage.css';

export default class HomePage extends Component {
  static contextType = ArticlesContext;
handleTopNews(){
  
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=948441d54c94474081783b97b5cc1da3',{
    headers: {
      'authorization': `bearer ${config.API_KEY}`, 
    }
  })
  .then(res=>res.json())     
  .then(data => {
        
         this.context.setArticlesList(data.articles);
      })
}

handleBuisness(){
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=948441d54c94474081783b97b5cc1da3')
  .then(res=>res.json())     
  .then(data1 => {
        
         this.context.setArticlesList(data1.articles);
      })
}
handleEntertainment(){
  fetch(' https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=948441d54c94474081783b97b5cc1da3')
  .then(res=>res.json())     
  .then(data => {
        console.log(data)
         this.context.setArticlesList(data.articles);
      })
 
}

handleHealth(){
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=948441d54c94474081783b97b5cc1da3')
  .then(res=>res.json())     
  .then(data => {
        console.log(data)
         this.context.setArticlesList(data.articles);
      })
}

handleScience(){
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=948441d54c94474081783b97b5cc1da3')
  .then(res=>res.json())     
  .then(data => {
        console.log(data)
         this.context.setArticlesList(data.articles);
      })
}

handleSports(){
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=948441d54c94474081783b97b5cc1da3')
  .then(res=>res.json())     
  .then(data => {
        console.log(data)
         this.context.setArticlesList(data.articles);
      })
}

handleTechnology(){
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=948441d54c94474081783b97b5cc1da3')
  .then(res=>res.json())     
  .then(data => {
        console.log(data)
         this.context.setArticlesList(data.articles);
      })
}

  componentDidMount() {
    this.handleTopNews()
    // this.handleBuisness()
    // this.handleEntertainment()
    // this.handleHealth()
    // this.handleScience()
    // this.handleSports()
    // this.handleTechnology()
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
          <li onClick={()=>this.handleTopNews()}>Top News</li>
          <li onClick={()=>this.handleBuisness()}>Buisness</li>
          <li onClick={()=>this.handleHealth()}>Health</li>
          <li onClick={()=>this.handleScience()}>Science</li>
          <li onClick={()=>this.handleSports()}>Sports</li>
          <li onClick={()=>this.handleTechnology()}>Technology</li>
          </ul>
        </div>
        <div className='articleContainer'>
          {this.renderArticlesToPage()}
          
        </div>
      </section>
    )
  }
}