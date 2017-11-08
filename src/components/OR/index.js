// @flow
import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-native";
import { Text } from "../";
import styles from "./styles";
import { Fonts, Colors } from "../../theme";

export default class OR extends React.Component {
  static propTypes = {
    borderColor: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.oneOf(_.keys(Fonts.size)),
      PropTypes.number
    ]),
    type: PropTypes.oneOf(_.keys(Fonts.type)),
    style: View.propTypes.style
  };

  static defaultProps = {
    title: "OR",
    type: "base",
    size: "small",
    style: ViewPropTypes.defaultProps,
    color: Colors.border,
    borderColor: Colors.border
  };

  render() {
    const { title, color, size, type, style, borderColor } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={[styles.line, { backgroundColor: borderColor }]} />
        <Text style={styles.content} color={color} size={size} type={type}>
          {title}
        </Text>
        <View style={[styles.line, { backgroundColor: borderColor }]} />
      </View>
    );
  }
}
