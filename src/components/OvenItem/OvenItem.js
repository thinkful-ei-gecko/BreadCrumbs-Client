import React from 'react'
import './OvenItem.css'
import { Link } from 'react-router-dom';
import ArticlesApiService from '../../services/articles-api-service'
import ArticlesContext from '../../contexts/ArticlesContext'

export default class NewsItem extends React.Component {

    render () {
      const { author, content, description, title, url, url_to_image, vote_count} = this.props
      console.log(url)
      
        return (
        <li className ='listItem'>
          <div className='score'>
             <button className='OvenItemBtn'><img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='fresh bread' className='fresh' /></button>  
              <p>{vote_count}</p>
             <button className='OvenItemBtn'> <img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='not-fresh' className='not-fresh' /> </button> 
            <Link to='/comments'>
             <button className='OvenItemBtn'> <img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' /> </button>
             </Link>
            </div> 
            
          <div className='item'>
            <img src={url_to_image} alt='donald trump' className='img' />
            <div className='article-section'>
          <h3> {title}</h3>
          <p> {description}
            </p>
            <a href={url} target='_blank'rel='noopener noreferrer' className='openLinkBtn'>View Article<img className = 'open-link' src='https://image.flaticon.com/icons/svg/1/1424.svg' alt='open link' /> </a>
          </div>
          </div>
        </li>
        )
    }
}