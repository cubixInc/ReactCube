// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { View } from "react-native";

import styles from "./styles";
// import articles from "../../data/articles";
import { CardView } from "../../components";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardView data={{ name: "Hello" }} />
      </View>
    );
  }
}

const mapStateToProps = ({ route }) => ({
  route
});

const actions = {};

export default connect(mapStateToProps, actions)(Home);
