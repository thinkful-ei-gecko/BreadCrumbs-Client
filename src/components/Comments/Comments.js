import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'

export default class Comments extends Component {
  static contextType = UserContext
  handleSubmit = ev => {
    // ev.preventDefault()
    // const { article } = this.context
    // const { comment } = ev.target
    // ApiService.postComment(article.id, text.value)
    //   .then(this.context.addComment)
    //   .then(() => {
    //     comment.value = ''
    //   })
    //   .catch(this.context.setError)
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

