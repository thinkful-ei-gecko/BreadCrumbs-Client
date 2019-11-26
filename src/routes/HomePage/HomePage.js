import React, { Component } from 'react';
import './HomePage.css';

export default class HomePage extends Component {

  renderArticlesToPage = () => {
    return 'Articles will be rendered here'
  }

  render() {
    return (
      <section>
        <div>
          <span>Top News</span>
          <span>Technology</span>
          <span>Sports</span>
          <span>Business</span>
        </div>
        <div>
          {this.renderArticlesToPage()}
        </div>
      </section>
    )
  }
}