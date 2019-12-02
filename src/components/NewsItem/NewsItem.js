import React from 'react'
import './NewsItem.css'
import { Link } from 'react-router-dom';
export default class NewsItem extends React.Component {

    render () {
      const {title,content,imageUrl} = this.props
        return (
        <li className ='listItem'>
          <div className='score'>
             <button className='NewsItemBtn'><img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='fresh bread' className='fresh' /></button>  
            <p>103</p>
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='not-fresh' className='not-fresh' /> </button> 
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/148/148838.svg' alt='heart' className='like' /></button>
            <Link to='/comments'>
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' /> </button>
             </Link>
            </div> 
            
          <div className='item'>
            <img src={imageUrl} alt='donald trump' className='img' />
            <div className='article-section'>
          <h3> {title}}</h3>
          <p> {content}
            </p>
          </div>
          </div>
        </li>
        )
    }
}