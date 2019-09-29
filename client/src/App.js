import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ReserveMap from "./components/ReserveMap";
import Ticket from "./components/Ticket";
import Footer from "./components/Footer";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <ReserveMap />
        <Ticket />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
