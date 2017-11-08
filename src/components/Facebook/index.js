// @flow
import { Image } from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonView, Text } from "../";
import { Images, Metrics } from "../../theme";
import { request } from "../../actions/UserActions";

import styles from "./styles";

class Facebook extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired
  };

  render() {
    return (
      <ButtonView style={styles.container} onPress={this._onPress}>
        <Image
          source={Images.facebook}
          style={{ marginLeft: Metrics.smallMargin }}
        />
        <Text color="tertiary">Connect with Facebook</Text>
      </ButtonView>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {
  request
};

export default connect(mapStateToProps, actions)(Facebook);
