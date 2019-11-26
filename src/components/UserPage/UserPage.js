import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class UserPage extends Component {
  render() {
    return (
      <div>
        <h2>UserName</h2>
        <Link to='/settings'>Settings</Link>
        <h3>Account Settings</h3>
        <p>username</p>
        <button>edit</button>
        <p>Password</p>
        <button>edit</button>
      </div>
    )
  }
}
