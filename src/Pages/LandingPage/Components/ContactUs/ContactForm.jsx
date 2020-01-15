import React, { Component } from "react";
import InputBox from "../../../../Components/InputBox";
import Button from "../../../../Components/Button";

export class ContactForm extends Component {
  sendMessage = () => {};
  onBlur = () => {};
  onChange = () => {};
  render() {
    return (
      <div className="ContactFormContainer">
        <h2>Contact Us</h2>
        <div>
          <InputBox
            label="FIRST NAME"
            labelFontSize="14px"
            labelColor="#001B50"
            labelMargin="5px 10px"
            autoComplete="on"
            type="text"
            height="30px"
            padding="20px"
            border="1px solid transparent"
            borderRadius="100px"
            fontSize="14px"
            backgroundColor="#EFF0F4"
            margin="10px"
            onBlur={() => this.onBlur("fname")}
            onChange={c => this.onChange("fname", c)}
          />
          <InputBox
            label="LAST NAME"
            labelFontSize="14px"
            labelColor="#001B50"
            labelMargin="5px 10px"
            autoComplete="on"
            type="text"
            height="30px"
            padding="20px"
            border="1px solid transparent"
            borderRadius="100px"
            fontSize="14px"
            backgroundColor="#EFF0F4"
            margin="10px"
            onBlur={() => this.onBlur("lname")}
            onChange={c => this.onChange("lname", c)}
          />
        </div>

        <InputBox
          label="YOUR MESSAGE"
          labelFontSize="14px"
          labelColor="#001B50"
          labelMargin="5px 10px"
          autoComplete="on"
          type="text"
          placeholder="Feel free to write us something"
          padding="20px"
          border="1px solid transparent"
          borderRadius="20px"
          fontSize="14px"
          backgroundColor="#EFF0F4"
          rows="5"
          cols="50"
          margin="10px"
          onBlur={() => this.onBlur("msg")}
          onChange={c => this.onChange("msg", c)}
        />

        <div>
          <InputBox
            label="YOUR E-MAIL"
            labelFontSize="14px"
            labelColor="#001B50"
            labelMargin="5px 10px"
            autoComplete="on"
            type="email"
            height="30px"
            padding="20px"
            border="1px solid transparent"
            borderRadius="100px"
            fontSize="14px"
            backgroundColor="#EFF0F4"
            margin="10px"
            onBlur={() => this.onBlur("email")}
            onChange={c => this.onChange("email", c)}
          />
          <Button
            buttonLabel="SEND YOUR MESSAGE"
            color="#FFFFFF"
            backgroundColor="#C28F09"
            fontSize="14px"
            fontWeight="bold"
            borderRadius="100px"
            height="45px"
            margin="35px 0 0 0"
            width="100%"
            onClick={buttonLabel => this.sendMessage(buttonLabel)}
          />
        </div>
      </div>
    );
  }
}

export default ContactForm;
