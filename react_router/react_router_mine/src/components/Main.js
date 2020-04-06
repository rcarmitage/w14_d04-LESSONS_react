import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Offers from "./Offers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/offers" component={Offers} />
          <Route path="/contact" component={Contact} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
