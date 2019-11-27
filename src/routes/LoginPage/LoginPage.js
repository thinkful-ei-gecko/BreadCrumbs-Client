import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/Login/Login';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  };

  render() {
    return (
      <section className='LoginPage' >
        <h2>Login</h2>
        <Login onLoginSuccess={this.handleLoginSuccess}/>
        <div className='rerouteRegister'>
          <Link to='/register'>Don't have an account yet? Sign-up!</Link>
        </div>
      </section>
   )
  }
}
