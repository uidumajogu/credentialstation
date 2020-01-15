import React, { Component } from "react";
import Header from "./Components/Header/Header";
import InstitutionsGrid from "./Components/InstitutionsGrid/InstitutionsGrid";
import Features from "./Components/Features/Features";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import CallToAction from "./Components/CallToAction/CallToAction";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";

export class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <InstitutionsGrid />
        <Features />
        <HowItWorks />
        <CallToAction />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default LandingPage;
