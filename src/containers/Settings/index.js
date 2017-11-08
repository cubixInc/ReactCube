// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { View } from "react-native";

import styles from "./styles";
import { Images } from "../../theme";
import { ScreenList } from "../../components";

const data = [
  {
    title: "Chat Demo",
    navigate: "chat"
  },
  {
    title: "Form Builder",
    navigate: "formBuilder"
  },
  {
    title: "About App",
    navigate: "about"
  },
  {
    title: "Privacy Policy",
    navigate: "policy"
  },
  {
    title: "Terms & Conditions",
    navigate: "terms"
  },
  {
    title: "Push Notification Settings",
    toggle: {
      value: true
    }
  },
  {
    title: "Logout",
    navigate: "login"
  }
];
class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScreenList data={data} />
      </View>
    );
  }
}

const mapStateToProps = ({ route }) => ({
  route
});

const actions = {};

export default connect(mapStateToProps, actions)(Settings);
