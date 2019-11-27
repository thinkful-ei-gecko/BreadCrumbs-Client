import React, { Component } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import './HomePage.css';

export default class HomePage extends Component {

  renderArticlesToPage = () => {
    return <NewsItem />
  }

  render() {
    return (
      <section>
        <div className='articleQueryContainer'>
          <span>Top News</span>
          <span>Technology</span>
          <span>Sports</span>
          <span>Business</span>
        </div>
        <div className='articleContainer'>
          {this.renderArticlesToPage()}
          {this.renderArticlesToPage()}
          {this.renderArticlesToPage()}
        </div>
      </section>
    )
  }
}