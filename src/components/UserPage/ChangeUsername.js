import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext'

export default class ChangeUsername extends Component {
  state = {
    error: null
  }

  static contextType = UserAndArticlesContext;
  
  handleChangeUsername = async(ev) =>{
    ev.preventDefault()

    const { new_name, new_user_name, password } = ev.target

    try {
      await AuthApiService.postChangeUsername({
        user_id: this.context.user.id,
        name: new_name.value,
        username: new_user_name.value,
        password: password.value,
      })
      this.setState({ error: 'Account updated successfully!'})
    } catch(error) {
      console.log(error)
      this.setState({ error: error.error });
    }
  }

  render() {
    return (
      <div className='box'>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleChangeUsername}>
            <label htmlFor='Login-name'>New Name: </label> <br />
            <input className='input' aria-label='Login-name' name='new_name' type='text' defaultValue={this.context.user.name} required></input> <br />
            <label htmlFor='Login-newusername'>New Username: </label> <br />
            <input className='input' aria-label='Login-newusername' name='new_user_name' type='text' defaultValue={this.context.user.username} required></input> <br />
            <label htmlFor='Login-password'>Password: </label>  <br />
            <input className='input' aria-label='Login-password' name='password' type='password' required></input> <br />
            <button className='loginRegBtn' type='submit'>Change Username</button>
      </form>
      </div>
    )
  }
}
