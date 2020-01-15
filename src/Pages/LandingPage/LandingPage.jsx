import React, { Component } from "react";
import Header from "./Components/Header/Header";
import InstitutionsGrid from "./Components/InstitutionsGrid/InstitutionsGrid";
import Features from "./Components/Features/Features";

export class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <InstitutionsGrid />
        <Features />
      </React.Fragment>
    );
  }
}

export default LandingPage;
