import React, { Component } from "react";
import "./CallToAction.css";
import Button from "../../../../Components/Button";

export class CallToAction extends Component {
  render() {
    return (
      <div className="CallToActionContainer">
        <p>
          Request a CS Key and create your credential verification application
          today. No coding required.
        </p>

        <Button
          buttonLabel="Get your CS Key"
          color="#FFFFFF"
          backgroundColor="#FA2B56"
          fontSize="18px"
          fontWeight="bold"
          borderRadius="50px"
          boxShadow="20px 20px 60px rgba(2, 8, 22, 0.4)"
          padding="20px 40px"
          //   onClick={buttonLabel => this.navButtonClicked(buttonLabel)}
        />
      </div>
    );
  }
}

export default CallToAction;
