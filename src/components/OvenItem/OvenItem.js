import './OvenItem.css'

import React from 'react'
import './NewsItem.css'
import { Link } from 'react-router-dom';
import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'

export default class NewsItem extends React.Component {
  static contextType = ArticlesContext;
    render () {
      const {author,content,description,title,url,url_to_image} = this.props

        return (
        <li className ='listItem'>
          <div className='score'>
          <button className='NewsItemBtn'><img src='https://image.flaticon.com/icons/svg/1999/1999848.svg' alt='send to oven' className='fresh' /></button>  
             <button className='NewsItemBtn'><img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='fresh bread' className='fresh' /></button>  
            {/* <p>{upvote_count}</p> */}
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='not-fresh' className='not-fresh' /> </button> 
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/148/148838.svg' alt='heart' className='like' onClick={()=>this.handleSavedArticle(author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id)} /></button>
            <Link to='/comments'>
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' /> </button>
             </Link>
            </div> 
            
          <div className='item'>
            <img src={url_to_image} alt='donald trump' className='img' />
            <div className='article-section'>
          <h3> {title}</h3>
          <p> {description}
            </p>
            <button className='ovenBtn'><img src='https://image.flaticon.com/icons/svg/1999/1999848.svg' alt='send to oven' className='fresh' /> <div className='ovenTxt'>Send to The Oven</div></button>  
            <a href={url} target='_blank'rel='noopener noreferrer' className='openLinkBtn'>View Article<img className = 'open-link' src='https://image.flaticon.com/icons/svg/1/1424.svg' alt='open link' /> </a>
          </div>
          </div>
        </li>
        )
    }
}