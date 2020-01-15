import React, { Component } from "react";

export class Topics extends Component {
  TopicsContainer = {
    display: "flex",
    flexDirection: this.props.display ? this.props.display : "column",
    justifyContent: this.props.justifyContent
      ? this.props.justifyContent
      : "left",
    alignItems: this.props.alignItems ? this.props.alignItems : null,
    width: this.props.width ? this.props.width : "20vw",
    minWidth: this.props.minWidth ? this.props.minWidth : "150px",
    margin: this.props.margin ? this.props.margin : "5vw 0"
  };

  TopicNumber = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#ECF4FF",
    boxShadow: "20px 20px 60px rgba(0, 0, 0, 0.4)",
    borderRadius: "100%",
    height: "calc(50px + 1vw)",
    width: "calc(50px + 1vw)",
    textAlign: "center",
    margin: "20px 20px 20px 0",
    fontWeight: "bold",
    fontSize: "calc(14px + 0.5vw)",
    lineHight: "calc(14px + 1vw)",
    color: "#001B50"
  };

  Topic = {
    fontSize: "calc(12px + 0.5vw)",
    lineHeight: "calc(12px + 1vw)",
    color: "#001B50"
  };

  render() {
    return (
      <div style={this.TopicsContainer}>
        <div style={this.TopicNumber}>{this.props.number}</div>
        <div style={this.Topic}>{this.props.topic}</div>
      </div>
    );
  }
}

export default Topics;
