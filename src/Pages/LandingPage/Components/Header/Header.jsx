import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="HeaderContainer">
        <div style={{ width: "40%" }}>
          <h1>
            Digitize your Academic credential verification and transcript
            transmission services in 4 easy steps
          </h1>
        </div>

        <div style={{ width: "60%" }}>
          <img width="100%" src="../assets/images/graduation_cap.svg" />
        </div>
      </div>
    );
  }
}

export default Header;
