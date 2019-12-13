import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import UserAndArticlesContext from "../../contexts/UserAndArticlesContext";
import ChangeUsername from "./ChangeUsername";
import ChangePassword from "./ChangePassword";
import "./UserPage.css";
import AuthApiService from "../../services/auth-api-service";

export default class UserPage extends Component {
  state = {
    showChangePassword: false,
    showForm: false,
    deleteUser: null,
    deleteSuccess: null
  };

  static contextType = UserAndArticlesContext;

  handleClickUsername = () => {
    this.setState({
      showChangePassword: false,
      showForm: !this.state.showForm
    });
  };

  handleClickPassword = () => {
    this.setState({
      showChangePassword: true,
      showForm: !this.state.showForm
    });
  };

  handleDeleteWarning = () => {
    this.setState({ deleteUser: !this.state.deleteUser });
  };

  handleDeleteUser = async () => {
    const user_id = this.context.user.id;
    await AuthApiService.deleteUser({ user_id });
    this.context.processLogout();
    this.setState({ deleteSuccess: true })
  };

  render() {
    return (
      <section className="Settings">
        <h2>{this.context.user.name}</h2>
        <h3 id="accSetting">
          <img
            className="gearThing"
            src="https://image.flaticon.com/icons/svg/0/525.svg"
            alt="settings"
          />
          <div className="accSettings"> Account Settings </div>
        </h3>
        <div className="settings">
          <p>Current Username: {this.context.user.username}</p>
          <button className="settingBtn" onClick={this.handleClickUsername}>
            Change Username
          </button>
        </div>
        <div className="settings">
          <p>Current Password: ****</p>
          <button className="settingBtn" onClick={this.handleClickPassword}>
            Change Password
          </button>
          {this.state.showForm &&
            (this.state.showChangePassword 
              ? (<ChangePassword />) : (<ChangeUsername />))}
          
          <div className='deleteAcc'>
          {this.state.deleteUser 
            ? (<div className='confirmation'>
            
                <p>Are you sure?</p>
                <button className='confirmBtn' onClick={this.handleDeleteUser}>Yes</button>
                <button className='confirmBtn' onClick={this.handleDeleteWarning}>No</button>
              </div>) 
              : (<button className='deleteBtn' onClick={this.handleDeleteWarning}>Delete Account</button>)}
          </div>
        </div>
        {this.state.deleteSuccess && <Redirect to="/" />}
      </section>
    );
  }
}
