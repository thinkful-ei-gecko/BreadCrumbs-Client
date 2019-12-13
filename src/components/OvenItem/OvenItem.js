/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./OvenItem.css";
import newsImg from "../NewsItem/images/news.jpg";
import Comments from "../../components/Comments/Comments";
import ArticlesApiService from "../../services/articles-api-service";
import UserAndArticlesContext from "../../contexts/UserAndArticlesContext";

export default class NewsItem extends Component {
  state = {
    articleId: null,
    error: null,
    handleVote: false
  };
  static contextType = UserAndArticlesContext;

  handleUpVote = async article_id => {
    try {
      const user_id = this.context.user.id;
      const vote_type = true;
      await ArticlesApiService.updateVote(article_id, user_id, vote_type);
      const data = await ArticlesApiService.getArticlesList();
      await this.context.setPopularArticlesList(data);
      this.setState({ handleVote: true });
    } catch (error) {
      this.setState({ error: error.error.message });
    }
  };

  handleDownVote = async article_id => {
    try {
      const user_id = this.context.user.id;
      const vote_type = false;
      await ArticlesApiService.updateVote(article_id, user_id, vote_type);
      const data = await ArticlesApiService.getArticlesList();
      await this.context.setPopularArticlesList(data);
      this.setState({ handleVote: true });
    } catch (error) {
      this.setState({ error: error.error.message });
    }
  };
  handleSavedArticle = article_id => {
    const user_id = this.context.user.id;
    ArticlesApiService.postSavedArticle(article_id, user_id);
  };

  handleRenderComments = async article_id => {
    await this.context.setArticleID({ article_id });
    const data = await ArticlesApiService.getComments(article_id);
    await this.context.setArticleComments(data);
  };

  handleCloseComments = async() => {
    let article_id = null;
    await this.context.setArticleID({ article_id });
  }

  handleSavedArticle = article_id => {
    const user_id = this.context.user.id;
    ArticlesApiService.postSavedArticle(article_id, user_id);
  };
 
  render() {
    const { error } = this.state;
    const {
      article_id,
      author,
      source,
      description,
      title,
      url,
      url_to_image,
      vote_count
    } = this.props;
   
    return (
      <li className="listItem">
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        <div className="score">
          <button className="OvenItemBtn up-bread">
            <img
              src="https://image.flaticon.com/icons/svg/2224/2224092.svg"
              alt="fresh bread"
              className="fresh"
              onClick={() => this.handleUpVote(article_id)}
            />
          </button>
          <p>{vote_count}</p>
          <button className="OvenItemBtn down-bread">
            {" "}
            <img
              src="https://image.flaticon.com/icons/svg/2224/2224092.svg"
              alt="not-fresh"
              className="not-fresh"
              onClick={() => this.handleDownVote(article_id)}
            />{" "}
          </button>
          <button className="OvenItemBtn heart">
            <img
              src="https://image.flaticon.com/icons/svg/148/148836.svg"
              alt="heart"
              className="comments"
              onClick={() => this.handleSavedArticle(article_id)}
            />
          </button>
          <a className="OvenItemBtn bubble" href="#popup1">
            <img
              src="https://image.flaticon.com/icons/svg/134/134914.svg"
              alt="comments"
              className="comments"
              onClick={() => this.handleRenderComments(article_id)}
            />
          </a>
        </div>

        <div className="item">
          {!!url_to_image === false 
            ? (<img src={newsImg} alt="img" className="img" />)
            : (<img src={url_to_image} alt="img" className="img" />)}
          <div className="article-section">
            <h3> {title}</h3>
            {author != null ? <p>By: {author}</p> : null}
            <p>Source: {source}</p>
            <p> {description}</p>
            <div className="empty-space"></div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="openLinkBtn"
            >
              View Article{" "}
              <img
                className="open-link"
                src="https://image.flaticon.com/icons/svg/1/1424.svg"
                alt="open link"
              />{" "}
            </a>
          </div>
        </div>

        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="close" href="#" onClick={this.handleCloseComments}>
              &times;
            </a>
            <div className="content-comment">
              <Comments className='comments-section'/>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
