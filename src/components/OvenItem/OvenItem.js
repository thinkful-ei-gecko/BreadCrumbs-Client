import React, { Component } from 'react';
import './OvenItem.css';
import news from '../NewsItem/images/news.jpg';
import Comments from '../../components/Comments/Comments';
import ArticlesApiService from '../../services/articles-api-service';
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext';

export default class NewsItem extends Component {
  state = {
    comments: false,
    articleId: null
  }
  static contextType = UserAndArticlesContext;
  
  handleUpVote=(article_id)=>{
    console.log(this.context.user)
    const user_id = this.context.user.id
    const vote_type = true
    ArticlesApiService.updateVote(article_id,user_id,vote_type)

  }

  handleDownVote=(article_id)=>{
    const user_id = this.context.user.id
    const vote_type = false
    ArticlesApiService.updateVote(article_id,user_id,vote_type)
  }
  handleSavedArticle=(article_id)=>{
    console.log('savedarticle')
    const user_id = this.context.user.id
    ArticlesApiService.postSavedArticle(article_id,user_id)
  }

  handleRenderComments = async(article_id) => {
    // commented out until getComments is working
    const data = await ArticlesApiService.getComments(article_id)
    this.context.setArticleComments(data)
    this.setState({ comments: !this.state.comments, articleId: article_id })
    // console.log(this.context.articleComments)
    // delete when getComments is working
    // this.setState({ comments: !this.state.comments, articleId: article_id })
  }

    render () {
      const { comments, articleId } = this.state;
      const { article_id, author, content, source, description, title, url, url_to_image, vote_count} = this.props
        return (
        <li className ='listItem'>
          <div className='score'>
             <button className='OvenItemBtn'><img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='fresh bread' className='fresh' onClick={()=>this.handleUpVote(article_id)} /></button>  
              <p>{vote_count}</p>
             <button className='OvenItemBtn'> <img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='not-fresh' className='not-fresh' onClick={()=>this.handleDownVote(article_id)} /> </button> 
            {/* <Link to={{pathname:'/comments', params:{article_id:article_id}}}>
             <button className='OvenItemBtn'> <img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' /> </button>
             </Link> */}
             <button className='OvenItemBtn'><img src='https://image.flaticon.com/icons/svg/148/148836.svg' alt='heart' className='comments' onClick={() => this.handleSavedArticle(article_id)} /></button>
             <button className='OvenItemBtn'><img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' onClick={() => this.handleRenderComments(article_id)}/></button>
            </div> 
            
          <div className='item'>
          { url_to_image === null ?
           <img src={news} alt='img' className='img' />: 
           <img src={url_to_image} alt='img' className='img' /> }
            <div className='article-section'>
          <h3> {title}</h3>
          {author != null ? <p>By: {author}</p> : null }
          <p>Source: {source}</p>
          <p> {content}</p>
            <a href={url} target='_blank'rel='noopener noreferrer' className='openLinkBtn'>View Article<img className = 'open-link' src='https://image.flaticon.com/icons/svg/1/1424.svg' alt='open link' /> </a>
          </div>
          </div>

          <div className='comments-container'>
            {comments && (articleId === article_id) ? <Comments /> : null}
          </div>
        </li>
        )
    }
}