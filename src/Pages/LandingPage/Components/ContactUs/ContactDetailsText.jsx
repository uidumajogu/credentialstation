import React, { Component } from "react";

export class ContactDetailsText extends Component {
  render() {
    return (
      <div className="ContactDetailsTextContainer">
        <h4>{this.props.title}</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default ContactDetailsText;
