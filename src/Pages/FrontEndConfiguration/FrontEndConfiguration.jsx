import React, { Component } from "react";
import SideBar from "./Components/SideBar/SideBar";
import "./FrontEndConfiguration.css";

export class FrontEndConfiguration extends Component {
  render() {
    return (
      <div className="FrontEndConfigurationContainer">
        <SideBar />
      </div>
    );
  }
}

export default FrontEndConfiguration;
