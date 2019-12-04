import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext';
import './UserPage.css'

export default class UserPage extends Component {
  static contextType = UserContext;

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
          <button className='settingBtn'>edit</button>
        </div>
        <div className='settings'>
          <p>Current Password: ****</p>
          <button className='settingBtn'> edit</button>
        </div>
      </section>
    )
  }
}
