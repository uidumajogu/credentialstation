import React, { Component } from "react";
import Button from "./Button";
import { RandomNumberGenerator } from "../Functions/RandomNumberGenerator";

export class NavBar extends Component {
  style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: this.props.margin ? this.props.margin : "0px",
    backgroundColor: this.props.backgroundColor
      ? this.props.backgroundColor
      : "#FFFFFF",
    boxShadow: this.props.boxShadow
      ? this.props.boxShadow
      : "6px 12px 24px rgba(0, 27, 80, 0.1)",
    borderRadius: this.props.borderRadius ? this.props.borderRadius : "40px",
    padding: this.props.padding ? this.props.padding : "1vw"
  };

  navButtonsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  navButtonClicked = navButtonName => {
    this.props.onClickNavButton
      ? this.props.onClickNavButton(navButtonName)
      : console.log(navButtonName);
  };

  render() {
    // console.log(this.isSmallScreen);
    return (
      <div
        style={{
          position: this.props.fixed ? "fixed" : null,
          top: this.props.fixed ? "0" : null,
          width: this.props.width ? this.props.width : "100%"
        }}
      >
        <div style={this.style}>
          {this.props.logo}

          {this.props.navButtons && (
            <div style={this.navButtonsStyle}>
              {this.props.navButtons.map(button => {
                return (
                  <Button
                    key={RandomNumberGenerator(6)}
                    buttonLabel={button}
                    color="#001B50"
                    fontSize="18px"
                    borderRadius="20px"
                    padding="5px"
                    margin="0 20px"
                    onClick={navButtonName =>
                      this.navButtonClicked(navButtonName)
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default NavBar;
