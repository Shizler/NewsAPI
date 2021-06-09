import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Articles from "./Articles";
import "../../src/App.css";

import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Container>
            <Articles />
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

export default hot(module)(App);
