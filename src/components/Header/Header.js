import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from '../../contexts/UserContext';
import './Header.css'

export default class Header extends Component {
  state = ({
    isOpen: false
  })

  static contextType = UserContext;
  
  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    console.log(this.context.user.name)
    return (
      <div>
        <div className='user-name'>
          Welcome, {this.context.user.name + '!'}
        </div>
        <div className='menu'>
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
      </div>
    );
  }

  renderLoginLink() {
    return (
    <div className='menu'>
      <Link className='headerLinks'
        to='/register'>
        Register
      </Link>
      <span> </span>
      <Link className='headerLinks'
        to='/login'>
        Log in
      </Link>
      
    </div>
    );
  }

  hideElements() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header>
        <h1>
        <Link className='mainHeader' to='/'>BreadCrumbs</Link>
        </h1>
        <div className='nav'>

          <div className='container' onClick={() => this.hideElements()}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>

          <div className='wide-menu'>
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
          </div>

          <div className='mobile-menu'>
          {this.state.isOpen && TokenService.hasAuthToken() ?
          this.renderLogoutLink()
          : ''}
          {this.state.isOpen && !TokenService.hasAuthToken() ? 
          this.renderLoginLink()
          : ''}
          </div>

        </div>
      </header>
    );
  }
}
