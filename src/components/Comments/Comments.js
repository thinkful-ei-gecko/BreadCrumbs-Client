import React, { Component } from 'react';
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext';
import ArticleApiService from '../../services/articles-api-service';

export default class Comments extends Component {
  static contextType = UserAndArticlesContext;

  handleSubmit = ev => {
    ev.preventDefault()
    const user_id=this.context.user.id
    console.log(this.props.location.params.article_id)
    const article_id = this.props.location.params.article_id
    const { comment } = ev.target
    console.log(comment.value)
    ArticleApiService.postComment(article_id, comment.value,user_id)
      .then(this.context.addComment)
      .then(() => {
        comment.value = ''
      })
      .catch(this.context.setError)
  }

  renderComments = () => {
    const comments = this.context.articleComments || [];
    console.log(comments)
    return(
      comments.map((comment, idx) =>
        <div className='individual-comment-container' key={idx}>
          <div className='user-posted-info'>
            <h5>Posted by: {comment.username}</h5>
            <div>Posted on: {comment.date_commented}</div>
          </div>
          <div>
            <p>{comment.comment}</p>
          </div>
        </div>
      )
    )
  }

  render() {
    return (
      <>
        {this.renderComments()}
        <form
          className='CommentForm'
          onSubmit={this.handleSubmit}
        >
          <div className='text'>
            <input type='text'
              required
              aria-label='Type a comment...'
              name='comment'
              id='comment'
              
              placeholder='Type a comment..'>
            </input>
          </div>
          <button type='submit'>
            Post comment
          </button>
        </form>
      </>
    )
  }
}

