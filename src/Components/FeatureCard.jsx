import React, { Component } from "react";

export class FeatureCard extends Component {
  FeatureCardContainer = {
    display: "flex",
    flexDirection: "column",
    //    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    background: this.props.background ? this.props.background : "#FFFFFF",
    border: this.props.border ? this.props.border : "1px solid #ECECEC",
    borderRadius: this.props.borderRadius ? this.props.borderRadius : "10px",
    margin: this.props.margin ? this.props.margin : "1vw",
    padding: this.props.margin ? this.props.margin : "20px 0"
  };

  FeatureCardDetails = {
    borderLeft: this.props.borderLeft
      ? this.props.borderLeft
      : "2px solid #C28F09",
    padding: this.props.padding ? this.props.padding : "0 10px"
  };

  FeatureCardTitle = {
    margin: "0",
    fontWeight: this.props.titleFontWeight
      ? this.props.titleFontWeight
      : "bold",
    fontSize: this.props.titleFontSize
      ? this.props.titleFontSize
      : "calc(10px + 0.5vw)",
    lineHeight: "calc(10px + 1vw)",
    color: this.props.titleColor ? this.props.titleColor : "#C28F09"
  };

  FeatureCardDescription = {
    margin: "0",
    fontWeight: this.props.descriptionFontWeight
      ? this.props.descriptionFontWeight
      : "300",
    fontSize: this.props.descriptionFontSize
      ? this.props.descriptionFontSize
      : "calc(8px + 0.5vw)",
    lineHeight: this.props.descriptionLineHeight
      ? this.props.descriptionLineHeight
      : "calc(8px + 1vw)",
    color: this.props.descriptionColor
      ? this.props.descriptionColor
      : "#3B3B3B",
    textAlign: "left"
  };

  render() {
    return (
      <div style={this.FeatureCardContainer}>
        <div style={this.FeatureCardDetails}>
          <h5 style={this.FeatureCardTitle}>{this.props.title}</h5>
          <p style={this.FeatureCardDescription}>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
