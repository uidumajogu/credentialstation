import React, { Component } from "react";
import "./TopBar.css";
import { connect } from "react-redux";

export class UnconnectedTopBar extends Component {
  render() {
    return (
      <div className="TopBarContainer">
        <div>
          <h3>Front End Configuration - Step {this.props.step}</h3>
          <p>Configure the front end of your credential verification app</p>
        </div>
        <div>
          <h5>{this.props.institutionName}</h5>
          <img src={this.props.institutionLogo} alt="Your Logo" />
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    institutionName: state.institutionName,
    institutionLogo: state.institutionLogo
  };
};

let TopBar = connect(mapStateToProps)(UnconnectedTopBar);
export default TopBar;
