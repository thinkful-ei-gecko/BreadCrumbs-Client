import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './UserPage.css'

export default class UserPage extends Component {
  render() {
    return (
      <section className='Settings'>
        <h2>UserName</h2>
        {/* <Link to='/settings'>Settings</Link> */}
        <h3 id='accSetting'>
          <img className='gearThing' src='https://image.flaticon.com/icons/svg/0/525.svg' alt='settings' /> 
          <div className='accSettings'> Account Settings </div>
        </h3>
        <div className='settings'>
          <p>username</p>
          <button className='settingBtn'>edit</button>
        </div>
        <div className='settings'>
          <p>Password</p>
          <button className='settingBtn'> edit</button>
        </div>
      </section>
    )
  }
}
