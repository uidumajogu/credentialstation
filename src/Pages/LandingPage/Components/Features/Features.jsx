import React, { Component } from "react";
import "./Features.css";
import FeatureCard from "../../../../Components/FeatureCard";
import { RandomNumberGenerator } from "../../../../Functions/RandomNumberGenerator";

const _features = [
  {
    title: "DATA SECURITY",
    description: "Excepteur sint occaecat cupidatat non proident"
  },
  {
    title: "AUDIT TRAIL",
    description: "Excepteur sint occaecat cupidatat non proident"
  },
  {
    title: "AUTHENTICATION",
    description: "Excepteur sint occaecat cupidatat non proident"
  },
  {
    title: "ANALYTICS",
    description: "Excepteur sint occaecat cupidatat non proident"
  },
  {
    title: "WHITE LABELLED",
    description: "Excepteur sint occaecat cupidatat non proident"
  },
  {
    title: "SAVES TIME",
    description: "Excepteur sint occaecat cupidatat non proident"
  }
];

export class Features extends Component {
  render() {
    return (
      <div className="FeaturesContainer">
        <div>
          <h2>Why credential station?</h2>
          <p>
            It is a simple robust platform that gives you the freedom to create,
            configure, manage and deploy an online credential verification
            system exactly the way you want. It provides high security and
            scalability while keeping your data completely under your control.
          </p>
        </div>
        <div>
          {_features.map(feature => {
            return (
              <FeatureCard
                key={RandomNumberGenerator(6)}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Features;
