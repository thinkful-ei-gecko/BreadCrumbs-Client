import React, { Component } from 'react';
import './OvenItem.css';
import news from '../NewsItem/images/news.jpg';
import Comments from '../../components/Comments/Comments';
import ArticlesApiService from '../../services/articles-api-service';
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext';

export default class NewsItem extends Component {
  state = {
    articleId: null,
    error:null,
    handleVote:false,
  }
  static contextType = UserAndArticlesContext;
  
  handleUpVote=async(article_id)=>{
    try {
    console.log(this.context.user)
    const user_id = this.context.user.id
    const vote_type = true
    await ArticlesApiService.updateVote(article_id,user_id,vote_type)
    const data = await ArticlesApiService.getArticlesList()
     await this.context.setPopularArticlesList(data);
     this.setState({handleVote:true})
    }
    catch(error) {
      console.log("Exception.... handleUpVote")
    }
  }

  handleDownVote=async(article_id)=>{
    try{
      const user_id = this.context.user.id
      const vote_type = false
      const vote = await ArticlesApiService.updateVote(article_id,user_id,vote_type)
      const data = await ArticlesApiService.getArticlesList()
      await this.context.setPopularArticlesList(data);
      this.setState({handleVote:true})
    }
    catch(error) {
      console.log("Exception.... handleDownVote")
    }
  }
  handleSavedArticle=(article_id)=>{
    console.log('savedarticle')
    const user_id = this.context.user.id
    ArticlesApiService.postSavedArticle(article_id,user_id)
  }

  handleRenderComments = async article_id => {
    console.log('button clicked')
    const data = await ArticlesApiService.getComments(article_id);
    this.context.setArticleComments(data);
    this.state.articleId === article_id
      ? this.setState({ articleId: null })
      : this.setState({ articleId: article_id });
  };
handleSavedArticle=(article_id)=>{
  console.log('savedarticle')
  const user_id = this.context.user.id
  ArticlesApiService.postSavedArticle(article_id,user_id)
}

    render () {
      const { error } = this.state
      const { articleId } = this.state;
      const { article_id, author, content, source, description, title, url, url_to_image, vote_count} = this.props
        return (
        <li className ='listItem'>
           <div role='alert'>
               {error && <p className='error'>{error}</p>}
            </div>
            <div className='score'>
             <button className='OvenItemBtn up-bread'><img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='fresh bread' className='fresh' onClick={()=>this.handleUpVote(article_id)} /></button>  
              <p>{vote_count}</p>
             <button className='OvenItemBtn down-bread'> <img src='https://image.flaticon.com/icons/svg/2224/2224092.svg' alt='not-fresh' className='not-fresh' onClick={()=>this.handleDownVote(article_id)} /> </button> 
             <button className='OvenItemBtn heart'><img src='https://image.flaticon.com/icons/svg/148/148836.svg' alt='heart' className='comments' onClick={() => this.handleSavedArticle(article_id)} /></button>
             {/* <button className='OvenItemBtn bubble'><img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' onClick={() => this.handleRenderComments(article_id)}/></button> */}
             <a className='OvenItemBtn bubble' href='#popup1'><img src='https://image.flaticon.com/icons/svg/134/134914.svg' alt='comments' className='comments' onClick={() => this.handleRenderComments(article_id)}/></a>
             
            </div> 
            
          <div className='item'>
          { url_to_image === null ?
            <img src={news} alt='img' className='img' />: 
            <img src={url_to_image} alt='img' className='img' /> }
            <div className='article-section'>
          <h3> {title}</h3>
          {author != null ? <p>By: {author}</p> : null }
          <p>Source: {source}</p>
          <p> {description}</p>
            <a href={url} target='_blank'rel='noopener noreferrer' className='openLinkBtn'>View Article <img className = 'open-link' src='https://image.flaticon.com/icons/svg/1/1424.svg' alt='open link' /> </a>
          </div>

        

          </div>

          <div id='popup1' className="overlay">
            <div className='popup'>
            <a className="close" href="#" onClick={() => this.handleRenderComments(article_id)}>&times;</a>
              <div className='content-comment'>
              {articleId === article_id ? (
                <Comments articleID={article_id} />
              ) : null}
              </div>
            </div>
          </div>
      </li>
    );
  }
}
