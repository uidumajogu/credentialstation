import React, { Component } from "react";
import "./InstitutionsGrid.css";

export class InstitutionsGrid extends Component {
  render() {
    return (
      <div className="InstitutionsGridContainer">
        <div>
          <div>
            <img
              src="../assets/images/institution_logo1.svg"
              alt="Institution Logo 1"
            />
            <img
              src="../assets/images/institution_logo2.svg"
              alt="Institution Logo 2"
            />
            <img
              src="../assets/images/institution_logo3.svg"
              alt="Institution Logo 3"
            />
            <img
              src="../assets/images/institution_logo4.svg"
              alt="Institution Logo 4"
            />
            <img
              src="../assets/images/institution_logo5.svg"
              alt="Institution Logo 5"
            />
            <img
              src="../assets/images/institution_logo6.svg"
              alt="Institution Logo 6"
            />
            <img
              src="../assets/images/institution_logo7.svg"
              alt="Institution Logo 7"
            />
            <img
              src="../assets/images/institution_logo8.svg"
              alt="Institution Logo 8"
            />
          </div>
        </div>
        <div>Trusted by great institutions</div>
      </div>
    );
  }
}

export default InstitutionsGrid;
