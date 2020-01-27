import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import FrontEndConfiguration from "./Pages/FrontEndConfiguration/FrontEndConfiguration";

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={LandingPage} />
        <Route
          exact={true}
          path="/front-end-configuration"
          component={FrontEndConfiguration}
        />
      </BrowserRouter>
    );
  };
}

export default App;
