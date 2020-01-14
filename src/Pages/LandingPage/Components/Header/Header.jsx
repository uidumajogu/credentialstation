import React, { Component } from "react";
import "./Header.css";
import NavBar from "../../../../Components/NavBar";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          margin="2vw 5vw"
          fixed={true}
          logo={<img src="../assets/logo/name_logo.svg" />}
          padding="1vw 3vw"
          navButtons={["How it works", "About", "Contact"]}
        />
        <div className="HeaderContainer">
          <div>
            <h1>
              Digitize your Academic credential verification and transcript
              transmission services in 4 easy steps
            </h1>
          </div>

          <div>
            <img width="100%" src="../assets/images/graduation_cap.svg" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
