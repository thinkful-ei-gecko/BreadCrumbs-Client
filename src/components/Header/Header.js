import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from '../../contexts/UserContext';
import './Header.css'

export default class Header extends Component {
  static contextType = UserContext;
  
  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <>
      <div className='user-name'>
        Welcome, {this.context.user.name + '!'}
      </div>
      <div>
        <Link className='headerLinks'
          to='/home'>
          Home
        </Link>
        <Link className='headerLinks'
          to='/savedarticles'>
          Saved
        </Link>
        <Link className='headerLinks'
          to='/userpage'>
          Account
        </Link>
        <Link className='headerLinks'
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
      </>
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
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}
