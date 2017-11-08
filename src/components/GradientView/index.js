// @flow
import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import AnimatedLinearGradient from "react-native-animated-linear-gradient";
import { Colors, ApplicationStyles } from "../../theme";

export default class GradientView extends React.PureComponent {
  static propTypes = {
    speed: PropTypes.number,
    color: PropTypes.oneOf(_.keys(Colors.presetColors)),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    speed: 2000,
    color: "instagram"
  };

  render() {
    const { color, children, ...rest } = this.props;
    return (
      <AnimatedLinearGradient
        speed={2000}
        style={ApplicationStyles.flex}
        customColors={Colors.presetColors[color]}
        {...rest}
      >
        {children}
      </AnimatedLinearGradient>
    );
  }
}
