import React, { Component } from "react";
import SideBar from "./Components/SideBar/SideBar";
import "./FrontEndConfiguration.css";
import TopBar from "./Components/TopBar/TopBar";

export class FrontEndConfiguration extends Component {
  render() {
    return (
      <div className="FrontEndConfigurationContainer">
        <SideBar />
        <div style={{ width: "100%" }}>
          <TopBar />
        </div>
      </div>
    );
  }
}

export default FrontEndConfiguration;
