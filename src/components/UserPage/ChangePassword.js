import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext'

export default class ChangePassword extends Component {
  state = {
    error: null
  }
  
  static contextType = UserAndArticlesContext;

  handleChangePassword = async (ev) =>{
    ev.preventDefault()
    const {old_password, new_password, confirm_password } = ev.target

    if (new_password !== confirm_password) {
      return this.setState({error: 'Passwords do not match'})
    }

    try {
      await AuthApiService.postChangePassword({
        id: this.context.user.id,
        old_password: old_password.value,
        new_password: new_password.value,
      })
      await AuthApiService.postLogin({
        username: this.context.user.username,
        password: new_password
      })

      old_password.value = '';
      new_password.value = '';
      confirm_password.value = '';

      this.setState({ error: 'Password updated successfully!' })
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <div className='box'>
        <form onSubmit={this.handleChangePassword}>
            <label htmlFor='Login-name'>Old Password: </label> 
            <input className='input' aria-label='old_password' name='old_password' type='text' required ></input> <br />
            <label htmlFor='Login-newusername'>New Password: </label> 
            <input className='input' aria-label='new_password' name='new_password' type='text' required ></input> <br />
            <label htmlFor='Login-password'>Confirm Password: </label> 
            <input className='input' aria-label='confirm_new_password' name='confirm_password' type='password' required ></input> <br />
            <button className='loginRegBtn' type='submit'>Change Password</button>
      </form>
      </div>
    )
  }
}
