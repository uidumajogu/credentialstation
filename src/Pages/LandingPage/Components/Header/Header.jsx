import React, { Component } from "react";
import "./Header.css";
import NavBar from "../../../../Components/NavBar";
import { withRouter } from "react-router-dom";

export class Header extends Component {
  navButtonClick = buttonName => {
    if (buttonName === "Get Started") {
      this.props.history.push("/front-end-configuration");
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          margin="2vw 5vw"
          fixed={true}
          logo={
            <img src="../assets/logo/name_logo.svg" alt="Credential Station" />
          }
          padding="1vw 3vw"
          navButtons={["Documentation", "Get Started"]}
          onClickNavButton={buttonName => this.navButtonClick(buttonName)}
        />
        <div className="HeaderContainer">
          <div>
            <h1>
              Digitize your Academic credential verification and transcript
              transmission services in 4 easy steps
            </h1>
          </div>

          <div>
            <img
              width="100%"
              src="../assets/images/graduation_cap.svg"
              alt="Graduation Cap"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
