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
    const destination = (location.state || {}).from || '/home'
    history.push(destination)
  };

  render() {
    return (
      <section className='box' >
        <Login onLoginSuccess={this.handleLoginSuccess}/>
        <div className='rerouteRegister'>
          <Link to='/register' className='subtext'>Don't have an account yet? Sign-up!</Link>
        </div>
      </section>
   )
  }
}
