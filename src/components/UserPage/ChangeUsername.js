import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext'

export default class ChangeUsername extends Component {
  static contextType = UserAndArticlesContext;
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
            <label htmlFor='Login-name'>  Name: </label> <br />
            <input className='input' aria-label='Login-name' name='new_name' type='text' required ></input> <br />
            <label htmlFor='Login-newusername'>  New Username: </label> <br />
            <input className='input' aria-label='Login-newusername' name='new_user_name' type='text' required ></input> <br />
            <label htmlFor='Login-password'> Password: </label>  <br />
            <input className='input' aria-label='Login-password' name='password' type='password' required ></input> <br />
            <button className='loginRegBtn' type='submit'>Change Username</button>
      </form>
      </div>
    )
  }
}
