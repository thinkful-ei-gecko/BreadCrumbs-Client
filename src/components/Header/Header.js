import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import Context from '../../Context/Context'

export default class Header extends Component {
  static contextType = Context;
 
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.refreshLoginState();
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
      <div>
          {this.context.isLoggedIn
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    );
  }
}
