import React, { Component } from 'react'
import UserAndArticlesContext from '../../contexts/UserAndArticlesContext';
import ChangeUsername from './ChangeUsername';
import ChangePassword from './ChangePassword'
import './UserPage.css'

export default class UserPage extends Component {
  state = { 
    showChangeUsername: false,
    showChangePassword:false 
  }
  static contextType = UserAndArticlesContext;
  
  handleClickUsername= () => {
    this.setState({
      showChangePassword: false,
      showChangeUsername: true
    });
  }
  
  handleClickPassword= () => {
    this.setState({
      showChangePassword: true,
      showChangeUsername: false
    });
  }

  render() {
    return (
      <section className='Settings'>
        <h2>{this.context.user.name}</h2>
        {/* <Link to='/settings'>Settings</Link> */}
        <h3 id='accSetting'>
          <img className='gearThing' src='https://image.flaticon.com/icons/svg/0/525.svg' alt='settings' /> 
          <div className='accSettings'> Account Settings </div>
        </h3>
        <div className='settings'>
          <p>Current Username: {this.context.user.username}</p>
          <button className='settingBtn' onClick={this.handleClickUsername}>Change Username</button>
          {this.state.showChangeUsername ? <ChangeUsername /> :null}
        </div>
        <div className='settings'>
          <p>Current Password: ****</p>
          <button className='settingBtn' onClick={this.handleClickPassword}>Change Password</button>
          {this.state.showChangePassword ? <ChangePassword /> :null}
        </div>
      </section>
    )
  }
}
