// @flow

// TODO: Add props for description such as color, size, type, textAlign
import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { View, Image, Switch } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "./styles";
import { ButtonView, Text } from "../../";
import { Fonts, Colors } from "../../../theme";

export default class ListItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    toggle: PropTypes.object,
    navigate: PropTypes.string,
    description: PropTypes.string,
    activeOpacity: PropTypes.number,
    leftImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    rightImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    color: PropTypes.oneOfType([
      PropTypes.oneOf(_.keys(Colors.text)),
      PropTypes.string
    ]),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(_.keys(Fonts.size)),
      PropTypes.number
    ]),
    type: PropTypes.oneOf(_.keys(Fonts.type)),
    background: PropTypes.string,
    textAlign: PropTypes.oneOf(["auto", "left", "right", "center", "justify"]),
    numberOfLines: PropTypes.number
  };

  static defaultProps = {
    activeOpacity: 1,
    title: undefined,
    toggle: undefined,
    onPress: undefined,
    navigate: undefined,
    leftImage: undefined,
    rightImage: undefined,
    description: undefined,
    type: "bold",
    size: "large",
    color: "primary",
    background: "primary",
    textAlign: "left",
    numberOfLines: 1
  };

  state = {
    toggleValue: (this.props.toggle && this.props.toggle.value) || false
  };

  _onPress = () => {
    const { toggle, onPress, navigate } = this.props;
    if (toggle) {
      // TODO: Do something on toggle
    } else if (onPress) {
      onPress();
    } else if (navigate) {
      if (navigate === "login") {
        Actions.login({ type: "reset" });
      } else {
        Actions.push(navigate);
      }
    }
  };

  renderLeftImage() {
    const { leftImage } = this.props;
    if (leftImage) {
      return (
        <View style={styles.edgeContainer}>
          <Image source={leftImage} style={styles.icon} resizeMode="contain" />
        </View>
      );
    }

    return null;
  }

  renderBody() {
    const {
      title,
      description,
      type,
      size,
      color,
      textAlign,
      numberOfLines
    } = this.props;

    return (
      <View style={styles.body}>
        {title && (
          <Text
            color={color}
            type={type}
            size={size}
            textAlign={textAlign}
            numberOfLines={numberOfLines}
          >
            {title}
          </Text>
        )}
        {description && (
          <Text textAlign="left" numberOfLines={2}>
            {description}
          </Text>
        )}
      </View>
    );
  }

  renderRightImage() {
    const { rightImage } = this.props;
    if (rightImage) {
      return (
        <View style={styles.edgeContainer}>
          <Image source={rightImage} style={styles.icon} resizeMode="contain" />
        </View>
      );
    }

    return null;
  }

  renderSwitch() {
    const { toggle } = this.props;
    if (toggle) {
      return (
        <View style={styles.edgeContainer}>
          <Switch
            value={this.state.toggleValue}
            onValueChange={toggleValue =>
              this.setState({
                toggleValue
              })}
          />
        </View>
      );
    }

    return null;
  }

  render() {
    const { background, ...rest } = this.props;
    return (
      <ButtonView
        style={[
          styles.container,
          {
            backgroundColor:
              background in Colors.background
                ? Colors.background[background]
                : background
          }
        ]}
        {...rest}
        onPress={this._onPress}
      >
        {this.renderLeftImage()}
        {this.renderBody()}
        {this.renderRightImage()}
        {this.renderSwitch()}
      </ButtonView>
    );
  }
}
