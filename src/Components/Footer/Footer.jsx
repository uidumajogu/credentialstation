import React, { Component } from "react";
import "./Footer.css";
import Button from "../Button";
import { RandomNumberGenerator } from "../../Functions/RandomNumberGenerator";
import Gap from "../Gap";

const footerButtons = [
  { buttonsGroup: ["Home", "About", "How It Works"] },
  { buttonsGroup: ["Documentation", "Resources", "Case Studies"] },
  { buttonsGroup: ["FAQ", "Privacy Policy", "Terms and Conditions"] }
];

export class Footer extends Component {
  footerButtonClicked = () => {};
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterTop">
          {footerButtons.map(buttonGroup => {
            return (
              <div>
                {buttonGroup.buttonsGroup.map(button => {
                  return (
                    <Button
                      key={RandomNumberGenerator(6)}
                      buttonLabel={button}
                      color="#FFFFFF"
                      fontSize="calc(8px + 1vw)"
                      padding="5px"
                      margin="20px 5vw"
                      onClick={footerButtonName =>
                        this.footerButtonClicked(footerButtonName)
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="FooterBottom">
          <div>
            <img
              width="10%"
              src="../assets/logo/logo_light.svg"
              alt="Credential Station"
            />
            <h5>© Credential Station 2019</h5>
          </div>
          <div>
            <img
              width="20%"
              src="../assets/images/twitter_icon.svg"
              alt="Twitter"
            />
            <Gap value="calc(10px + 1vw)" />
            <img
              width="20%"
              src="../assets/images/instagram_icon.svg"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
