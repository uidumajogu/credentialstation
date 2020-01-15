import React, { Component } from "react";
import "./ContactUs.css";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export class ContactUs extends Component {
  render() {
    return (
      <div className="ContactUsContainer">
        <ContactForm />
        <ContactDetails />
      </div>
    );
  }
}

export default ContactUs;
