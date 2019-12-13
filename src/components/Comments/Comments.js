import React, { Component } from "react";
import UserAndArticlesContext from "../../contexts/UserAndArticlesContext";
import ArticleApiService from "../../services/articles-api-service";
import moment from "moment";
import './Comments.css';

export default class Comments extends Component {
  state = {
    update: false
  };
  static contextType = UserAndArticlesContext;

  handleSubmit = async ev => {
    ev.preventDefault();
    const user_id = this.context.user.id;
    const article_id = this.props.articleID;
    const { comment } = ev.target;

    ArticleApiService.postComment(article_id, comment.value, user_id)
      .then(() => {
        comment.value = "";
      })
      .catch(this.context.setError);
    this.context.addComment({
      username: this.context.user.username,
      comment: comment.value,
      date_commented: Date.now()
    });
    this.setState({ update: !this.state.update });
  };

  renderComments = () => {
    const comments = this.context.articleComments || [];
    return comments.map((comment, idx) => (
      <div className="individual-comment-container" key={idx}>
        <div className="user-posted-info">
          <h5>{comment.username}: </h5>
          <div className="comment-body">
            <p>{comment.comment}</p>
          </div>
        </div>

        <div className="comment-date">
          Posted on:{" "}
          {moment(comment.date_commented).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
    ));
  };

  render() {
    return (
      <>
        {this.renderComments()}
        <form className="CommentForm" onSubmit={this.handleSubmit}>
          <div className="text">
            <textarea
              className="comment-textarea"
              required
              aria-label="Type a comment..."
              name="comment"
              id="comment"
              placeholder="Type a comment.."
            ></textarea>
          </div>
          <button className="category" type="submit">
            Post comment
          </button>
        </form>
      </>
    );
  }
}
