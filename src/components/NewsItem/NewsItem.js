import React from 'react'
import './NewsItem.css'
import { Link } from 'react-router-dom';
import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'

export default class NewsItem extends React.Component {
  static contextType = ArticlesContext;
  // handleSavedArticle = (author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id)=>{
  //  ArticlesApiService.postSavedArticle(author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id)
  // //  .then(res=>this.context.setSavedArticlesList(res))
  // .then(res=>console.log(res))
  //  .catch(this.context.setError);
  // }
    render () {
      const {author,content,description,title,url,url_to_image} = this.props
      console.log(url)
      // const {author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id} = this.props
        return (
        <li className ='listItem'>
          <div className='score'>
             <button className='NewsItemBtn'><img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='fresh bread' className='fresh' /></button>  
            {/* <p>{upvote_count}</p> */}
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='not-fresh' className='not-fresh' /> </button> 
             {/* <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/148/148838.svg' alt='heart' className='like' onClick={()=>this.handleSavedArticle(author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id)} /></button> */}
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
            <a href={url} target='_blank'rel='noopener noreferrer'>View Article</a>
          </div>
          </div>
        </li>
        )
    }
}