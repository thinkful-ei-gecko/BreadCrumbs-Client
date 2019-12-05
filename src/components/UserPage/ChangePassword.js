import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'

export default class ChangePassword extends Component {
  static contextType = UserContext;
  handleChangePassword = (ev) =>{
    ev.preventDefault()
    const {old_password,new_password,confirm_password } = ev.target

    AuthApiService.postNewPassword({
      id:this.context.user.id,
      old_password: old_password.value,
      new_password: new_password.value,
      confirm_password: confirm_password.value,
    })
    .then(this.componentDidMount())
  }
  render() {
    return (
      <div className='box'>
        <form onSubmit={this.handleChangePassword}>
            <label htmlFor='Login-name'>  Old Password: </label> 
            <input className='input' aria-label='Login-name' name='old_password' type='text' required ></input>
            <label htmlFor='Login-newusername'>  New Password: </label> 
            <input className='input' aria-label='Login-newusername' name='new_password' type='text' required ></input>
            <label htmlFor='Login-password'> Confirm Password: </label> 
            <input className='input' aria-label='Login-password' name='confirm_password' type='password' required ></input>
            <button className='loginRegBtn' type='submit'>Change Password</button>
      </form>
      </div>
    )
  }
}