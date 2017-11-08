// @flow
import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";

import configureStore from "./store";
import AppNavigator from "./navigator";
import applyConfigSettings from "./config";

const reducers = require("./reducers").default;

applyConfigSettings();

class App extends Component {
  state = {
    isLoading: true,
    store: configureStore(reducers, () => {
      this.setState({ isLoading: false });
    })
  };

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("AutoConnect", () => App);
