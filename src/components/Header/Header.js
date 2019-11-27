import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import './Header.css'

export default class Header extends Component {
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div>
        <Link className='headerLinks'
          to='/home'>
          Home
        </Link>
        <Link className='headerLinks'
          to='/savedarticles'>
          Saved Articles
        </Link>
        <Link className='headerLinks'
          to='/userpage'>
          Account Settings
        </Link>
        <Link className='headerLinks'
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div>
      <Link className='headerLinks'
        to='/register'>
        Register
      </Link>
      <span>--</span>
      <Link className='headerLinks'
        to='/login'>
        Log in
      </Link>
    </div>
    );
  }
  render() {
    return (
      <header>
        <h1>
        <Link className='mainHeader' to='/'>BreadCrumbs</Link>
        </h1>
        <div className='nav'>
          {this.renderLogoutLink()}
          {/* {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()} */}
        </div>
      </header>
    );
  }
}
