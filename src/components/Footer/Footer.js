import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer-desc-container'>
          <p className='footer-desc'>Copyright | BreadCrumbs | 2019</p>
        </div>
      </footer>
    )
  }
}