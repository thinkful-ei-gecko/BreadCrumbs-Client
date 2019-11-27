import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Registration from '../../components/Registartion/Registration';
import './RegistrationPage.css';

export default class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    }
  };

  handleSignUpSuccess = user => {
    const { history } = this.props
    history.push('/login')
  };

  render() {
    return (
      <section className='RegistrationPage'>
        <Registration onSignUpSuccess={this.handleSignUpSuccess}/>
        <div className='rerouteLogin'>
          <Link to='/login'>Already have an account? Sign-in!</Link>
        </div>
      </section>
    )
  }
}