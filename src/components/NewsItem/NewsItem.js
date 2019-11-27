import React from 'react'
import './NewsItem.css'

export default class NewsItem extends React.Component {

    render () {
        return (
        <li className ='listItem'>
          <div className='score'>
             <button className='NewsItemBtn'><img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='fresh bread' className='fresh' /></button>  
            <p>103</p>
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='not-fresh' className='not-fresh' /> </button> 
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/148/148838.svg' alt='heart' className='like' /></button>
             <button className='NewsItemBtn'> <img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' /> </button>
            </div> 
            
          <div className='item'>
            <img src='https://static.politico.com/dims4/default/314ce63/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fd8%2F21%2F5a849dfc45e39e499a69a6bcc7a4%2F190911-donald-trump-gty-773.jpg' alt='donald trump' class='img' />
            <div className='article-section'>
          <h3> Donald Trump Donald Trump </h3>
          <p> Donald Trump, Trump Donald, Donald Donald, Trump Trump Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          </div>
        </li>
        )
    }
}