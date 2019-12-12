import React, { Component } from "react";
import UserAndArticlesContext from "../../contexts/UserAndArticlesContext";
import ChangeUsername from "./ChangeUsername";
import ChangePassword from "./ChangePassword";
import "./UserPage.css";
import AuthApiService from "../../services/auth-api-service";

export default class UserPage extends Component {
  state = {
    showChangePassword: false,
    showForm: false,
    deleteUser: null
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
          {this.state.deleteUser 
            ? (<>
                <p>Are you sure?</p>
                <button onClick={this.handleDeleteUser}>Yes</button>
                <button onClick={this.handleDeleteWarning}>No</button>
              </>) 
              : (<button onClick={this.handleDeleteWarning}>Delete Account</button>)}
        </div>
      </section>
    );
  }
}
