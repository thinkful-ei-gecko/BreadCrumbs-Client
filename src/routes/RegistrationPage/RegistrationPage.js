import React, { Component } from 'react'
import Registration from '../../components/Registartion/Registration';

export default class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }
  render() {
    return (
      <section className='RegistrationPage'>
      
      <Registration onSignUpSuccess={this.handleSignUpSuccess}/>
    </section>
    )
  }
}