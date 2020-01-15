import React, { Component } from "react";
import ContactDetailsText from "./ContactDetailsText";

export class ContactDetails extends Component {
  render() {
    return (
      <div className="ContactDetailsContainer">
        <ContactDetailsText title="E-MAIL" text="hello@credentialstation.com" />
        <ContactDetailsText title="PHONE" text="+234 356 3778 241" />
        <ContactDetailsText
          title="ADDRESS"
          text="123b Western House,
Ikoyi, Lagos 101001
Nigeria"
        />
      </div>
    );
  }
}

export default ContactDetails;
