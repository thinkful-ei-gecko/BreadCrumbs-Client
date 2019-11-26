import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";


export default class Header extends Component {
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div>
        <Link
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
      <Link
        to='/register'>
        Register
      </Link>
      <span>--</span>
      <Link
        to='/login'>
        Log in
      </Link>
    </div>
    );
  }
  render() {
    return (
      <nav>
        <h1>
          <Link to='/'>BreadCrumbs</Link>
        </h1>
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
