import React from 'react'
import './NewsItem.css'
import news from './images/news.jpg'
import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'


export default class NewsItem extends React.Component {
  static contextType = ArticlesContext;
  handleOvenArticle = (author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id)=>{
   ArticlesApiService.postArticle(author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id)
  }
    render () {
      const {author,content,source,description,title,url,url_to_image} = this.props
      
      // const {author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id} = this.props
        return (
        <li className ='listItem'>
          <div className='score'>
             <button className='NewsItemBtn'>Send To Oven</button>  
          
            </div> 
            
          <div className='item'>
           { url_to_image === null ?
           <img src={news} alt='img' className='img' />: 
           <img src={url_to_image} alt='img' className='img' /> }
            
            <div className='article-section'>
          <h3> {title}</h3>
          {author != null ? <p>By {author}</p> : null }
          
          <p>Source:{source}</p>
          <p> {content}</p>
            <button className='ovenBtn'><img src='https://image.flaticon.com/icons/svg/1999/1999848.svg' alt='send to oven' className='fresh' /> <div className='ovenTxt'>Send to The Oven</div></button>  
            <a href={url} target='_blank'rel='noopener noreferrer' className='openLinkBtn'>View Article<img className = 'open-link' src='https://image.flaticon.com/icons/svg/1/1424.svg' alt='open link' /> </a>
          </div>
          </div>
        </li>
        )
    }
}