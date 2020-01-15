import React, { Component } from "react";

export class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      onInputErrorMessage: ""
    };
  }

  handleEnteredInput = event => {
    this.props.onChange(event.target.value);
  };

  inputBoxContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: this.props.width ? this.props.width : "100%",
    margin: this.props.margin ? this.props.margin : "0"
  };

  inputBoxStyle = {
    width: this.props.width ? this.props.width : "100%",
    height: this.props.height,
    padding: this.props.padding,
    color: this.props.color,
    border: this.props.border ? this.props.border : "none",
    borderRadius: this.props.borderRadius,
    fontSize: this.props.fontSize,
    backgroundColor: this.props.backgroundColor
  };

  labelStyle = {
    margin: this.props.labelMargin ? this.props.labelMargin : "0",
    fontSize: this.props.labelFontSize
  };

  render() {
    return this.props.rows ? (
      <div style={this.inputBoxContainerStyle}>
        <h5 style={this.labelStyle}>{this.props.label}</h5>
        <textarea
          style={{
            ...this.inputBoxStyle,
            border: this.props.border
          }}
          className="inputBox"
          defaultValue={this.props.value}
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={this.handleEnteredInput}
          onBlur={this.props.onBlur}
          autoComplete={this.props.autoComplete}
          rows={this.props.rows}
          cols={this.props.cols}
        />
      </div>
    ) : (
      <div style={this.inputBoxContainerStyle}>
        <h5 style={this.labelStyle}>{this.props.label}</h5>
        <input
          style={{
            ...this.inputBoxStyle,
            border: this.props.border
          }}
          className="inputBox"
          defaultValue={this.props.value ? this.props.value : ""}
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={this.handleEnteredInput}
          onBlur={this.props.onBlur}
          autoComplete={this.props.autoComplete}
          size={this.props.size}
        />
      </div>
    );
  }
}

export default InputBox;
