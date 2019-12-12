import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Registration from '../../components/Registration/Registration';

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
      <section className='box'>
        <Registration onSignUpSuccess={this.handleSignUpSuccess}/>
        <div className='rerouteLogin'>
          <Link to='/login' className='subtext'>Already have an account? Sign-in!</Link>
        </div>
      </section>
    )
  }
}