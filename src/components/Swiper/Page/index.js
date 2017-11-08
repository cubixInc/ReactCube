// @flow
import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Image } from "react-native";

import { Text } from "../../";
import styles from "./styles";
import Util from "../../../util";

export default class Page extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    descriptionStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
  };
  static defaultProps = {
    titleStyle: styles.title,
    imageStyle: styles.image,
    descriptionStyle: styles.description
  };

  state = {
    components: undefined
  };

  componentDidMount() {
    const { page, titleStyle, imageStyle, descriptionStyle } = this.props;

    const components = [];

    Object.keys(page).forEach(key => {
      if (key === "title") {
        components.push(this._renderTitle(page, titleStyle));
      } else if (key === "imageSource") {
        components.push(this._renderImage(page, imageStyle));
      } else if (key === "description") {
        components.push(this._renderDescription(page, descriptionStyle));
      }
    });

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      components
    });
  }

  _renderTitle({ title, textColor }, titleStyle) {
    return (
      title && (
        <Text
          key="title"
          type="bold"
          size="large"
          color={textColor || "primary"}
          style={titleStyle}
        >
          {title}
        </Text>
      )
    );
  }

  _renderImage({ imageSource }, imageStyle) {
    return (
      imageSource && (
        <Image
          key="image"
          resizeMode="contain"
          source={Util.getValidImage(imageSource)}
          style={imageStyle}
        />
      )
    );
  }

  _renderDescription({ description, textColor }, descriptionStyle) {
    return (
      description && (
        <Text
          size="large"
          key="description"
          textAlign="center"
          color={textColor || "primary"}
          style={descriptionStyle}
        >
          {description}
        </Text>
      )
    );
  }

  render() {
    const { backgroundColor } = this.props.page;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        {this.state.components}
      </View>
    );
  }
}
