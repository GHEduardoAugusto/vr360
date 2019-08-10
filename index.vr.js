import React, { Component } from "react";
import { AppRegistry, View } from "react-vr";
import { MemoryRouter as Router, Route } from "react-router";
import PG1 from "./src/pageOne/pageOne";
import PG2 from "./src/pageTwo/pageTwo";

class Vr extends Component {
  render() {
    return (
      <Router>
        <View>
          <Route exact path="/" component={PG1} />
          <Route exact path="/pageOne" component={PG1} />
          <Route exact path="/pageTwo" component={PG2} />
        </View>
      </Router>
    );
  }
}

AppRegistry.registerComponent("Vr", () => Vr);
