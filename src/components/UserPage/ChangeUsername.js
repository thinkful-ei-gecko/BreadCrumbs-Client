import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'

export default class ChangeUsername extends Component {
  static contextType = UserContext;
  handleChangeUsername = (ev) =>{
    ev.preventDefault()
    const {new_name,new_user_name,password } = ev.target
    AuthApiService.postNewPassword({
      id:this.context.user.id,
      name: new_name.value,
      username: new_user_name.value,
      password: password.value,
    })
    .then(this.componentDidMount())
  }
  render() {
    return (
      <div className='box'>
        <form onSubmit={this.handleChangeUsername}>
            <label htmlFor='Login-name'>  Name: </label> 
            <input className='input' aria-label='Login-name' name='new_name' type='text' required ></input>
            <label htmlFor='Login-newusername'>  New Username: </label> 
            <input className='input' aria-label='Login-newusername' name='new_user_name' type='text' required ></input>
            <label htmlFor='Login-password'> Password: </label> 
            <input className='input' aria-label='Login-password' name='password' type='password' required ></input>
            <button className='loginRegBtn' type='submit'>Change Username</button>
      </form>
      </div>
    )
  }
}
