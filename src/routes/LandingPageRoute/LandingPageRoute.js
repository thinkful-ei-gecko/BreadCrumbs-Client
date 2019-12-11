import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPageRoute.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faBreadSlice, faHeart } from '@fortawesome/free-solid-svg-icons';

export default class LandingPageRoute extends Component {
  render() {
    return (
        <main>
          <section className="showcase">
            <div className="content">
              <div className="title">
                Welcome to BreadCrumbs!
              </div>
              <div className="intro-text">
                Community-driven, interactive news outlet to keep you current on all of the latest news.
              </div>
            </div>
            <div className="join">
              <Link to='/register'>
                <button className="join-btn">Join Today</button>
              </Link>
            </div>
          </section>

          <section className="features  bg-dark">
            <div className="container grid-3 center">
              <div className="card">
                <div className="face-1">
                  <FontAwesomeIcon className="icon" icon={faNewspaper}></FontAwesomeIcon>
                  <h3>Top News</h3>
                </div>
                <div className="face-2">
                  <p>View top news articles from all of the major news sources or filter by category.</p>
                </div>
              </div>

              <div className="card">
                <div className="face-1">
                  <FontAwesomeIcon className="icon" icon={faBreadSlice}></FontAwesomeIcon>
                  <h3>The Oven</h3>
                </div>
                <div className="face-2">
                  <p>Popular news based on user voting system.  Interact with others by submitting comments on any article.</p>
                </div>
              </div>

              <div className="card">
                <div className="face-1">
                  <FontAwesomeIcon className="icon" icon={faHeart}></FontAwesomeIcon>
                  <h3>Save</h3>
                </div>
                <div className="face-2">
                  <p>News come and go faster than you can butter your toast. So make sure you bookmark your favorite articles!</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about">
            <div className="container">
              <div className="grid-2">
                <div className="center">
                  <h3>ABOUT US</h3>
                </div>
             
                <div>
                  <p>Our team at BreadCrumbs envisions the top news to be dictated by our community.  We present all of the breaking news stories from across various major news sources, but we have implemented The Oven to allow users to vote on what our top news should be.  Users can interact with others by sharing their thoughts and ideas in the comments section of each article.  Come join our community and let's determine which news is fresh and which are stale.</p>
                </div>
              </div>
            </div>
          </section>

        </main>
    )
  }
}