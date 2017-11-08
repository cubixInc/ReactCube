// @flow
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, TouchableNativeFeedback, View } from "react-native";
import Util from "../../util";

export default class ButtonView extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    style: {}
  };

  render() {
    const { style, children, ...rest } = this.props;

    if (Util.isPlatformAndroid()) {
      return (
        <TouchableNativeFeedback {...rest}>
          <View style={style}>{this.props.children}</View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity style={style} {...rest}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
