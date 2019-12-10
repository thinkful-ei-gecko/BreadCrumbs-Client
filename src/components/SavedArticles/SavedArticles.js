import React, { Component } from 'react'
import news from '../NewsItem/images/news.jpg'
import ArticlesApiService from '../../services/articles-api-service'
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext'
import '../OvenItem/OvenItem.css'

export default class SavedArticles extends Component {
  static contextType = UserAndArticlesContext;
  componentDidMount() {
    
    ArticlesApiService.getSavedArticlesList()
      .then(res => {
        console.log('saved articles',res)
        this.context.setSavedArticlesList(res);
      })
      .catch(this.context.setError);
  }

  handleDeleteArticle=(id)=>{
    console.log(id)
    ArticlesApiService.deleteSavedArticle(id)
    .then(res => {
      console.log('saved articles after delete',res)
      this.context.setSavedArticlesList(res);
    })
    .catch(this.context.setError);
  }

  renderSavedArticlesToPage() {
    const { savedArticlesList = [] } = this.context;
    return (savedArticlesList.map((article,idx) =>
    
    
      <li  key={idx} className ='listItem'>
        <div className='score'>
        <button className='OvenItemBtn'><img src='https://image.flaticon.com/icons/svg/64/64022.svg' alt='comments' className='comments' onClick={() => this.handleDeleteArticle(article.id)} /></button>
          </div> 
          
        <div className='item'>
         
         {article.url_to_image === null ?
         <img src={news} alt='img' className='img' />: 
         <img src={article.url_to_image} alt='img' className='img' />}
          <div className='article-section'>
        <h3> {article.title}</h3>
        {article.author != null ? <p>By: {article.author}</p> : null }
        <p>Source:{article.source_name}</p>
        <p> {article.content}</p>
          <a href={article.url} target='_blank'rel='noopener noreferrer' className='openLinkBtn'>View Article<img className = 'open-link' src='https://image.flaticon.com/icons/svg/1/1424.svg' alt='open link' /> </a>
        </div>
        </div>
      </li>
    )
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