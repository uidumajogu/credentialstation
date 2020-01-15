import React, { Component } from "react";
import Header from "./Components/Header/Header";
import InstitutionsGrid from "./Components/InstitutionsGrid/InstitutionsGrid";

export class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />;
        <InstitutionsGrid />
      </React.Fragment>
    );
  }
}

export default LandingPage;
