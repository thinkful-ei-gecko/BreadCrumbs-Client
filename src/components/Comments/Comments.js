import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import ArticleApiService from '../../services/articles-api-service'
import { tsConstructSignatureDeclaration } from '@babel/types'
export default class Comments extends Component {
  static contextType = UserContext
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
  render() {
    return (
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
    )
  }
}

