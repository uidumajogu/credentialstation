import React, { Component } from "react";
import "./HowItWorks.css";
import { RandomNumberGenerator } from "../../../../Functions/RandomNumberGenerator";
import Topics from "../../../../Components/Topics";

const _howItWorksSteps = [
  { index: 1, description: "Request a cs Key" },
  { index: 2, description: "Configure your credential station App" },
  { index: 3, description: "Download your credential station  build" },
  { index: 4, description: "Upload to your servers" }
];

export class HowItWorks extends Component {
  render() {
    return (
      <div className="HowItWorksContainer">
        <div>
          <h2>How it works</h2>
          <p>In just 4 simple steps</p>
        </div>
        <div>
          <div>
            <img
              width="100%"
              src="../assets/images/customer_journey_illustration.svg"
              alt="Customer Journey Illustration"
            />
          </div>
          <div>
            {_howItWorksSteps.map(step => {
              return (
                <Topics
                  key={RandomNumberGenerator(6)}
                  number={step.index}
                  topic={step.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
