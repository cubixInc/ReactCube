// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Animated } from "react-native";
import { Text } from "../../";

import styles from "./styles";

export default class Page extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    pages: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    parallax: PropTypes.any.isRequired,
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

  getTransform = (index, offset, level) => {
    const { pages, width, parallax } = this.props;

    const isFirstPage = index === 0;
    const statRange = isFirstPage ? 0 : width * (index - 1);
    const endRange = isFirstPage ? width : width * index;
    const leftPosition = isFirstPage ? 0 : width / pages.length;
    const rightPosition = isFirstPage ? -width / pages.length : 0;
    const startOpacity = isFirstPage ? 1 : 0;
    const endOpacity = isFirstPage ? 0 : 1;
    const startScale = isFirstPage ? 1 : 0.8;
    const endScale = isFirstPage ? 0.8 : 1;
    const transform = [
      {
        transform: [
          {
            translateX: parallax.interpolate({
              inputRange: [statRange, endRange],
              outputRange: [
                isFirstPage ? leftPosition : leftPosition - offset * level,
                isFirstPage ? rightPosition + offset * level : rightPosition
              ]
            })
          },
          {
            scale: parallax.interpolate({
              inputRange: [statRange, endRange, endRange * 2],
              outputRange: [startScale, endScale, startScale]
            })
          }
        ]
      },
      {
        opacity: parallax.interpolate({
          inputRange: [statRange, endRange, endRange * 2], // inputRange: [statRange, endRange],
          outputRange: [startOpacity, endOpacity, startOpacity] // outputRange: [startOpacity, endOpacity]
        })
      }
    ];
    return {
      transform
    };
  };

  _renderTitle({ title, textColor }, titleStyle) {
    const level = Math.random() * 20;
    const { transform } = this.getTransform(this.props.index, 10, level);
    return (
      title && (
        <Animated.View key={"title" + this.props.index} style={transform}>
          <Text
            key="title"
            size="large"
            color={textColor || "primary"}
            style={titleStyle}
          >
            {title}
          </Text>
        </Animated.View>
      )
    );
  }

  _renderImage({ imageSource }, imageStyle) {
    const level = Math.random() * 20;
    const { transform } = this.getTransform(this.props.index, 10, level);

    return (
      imageSource && (
        <Animated.View key={"image" + this.props.index} style={transform}>
          <Image
            key="image"
            resizeMode="contain"
            source={imageSource}
            style={imageStyle}
          />
        </Animated.View>
      )
    );
  }

  _renderDescription({ description, textColor }, descriptionStyle) {
    const level = Math.random() * 20;
    const { transform } = this.getTransform(this.props.index, 10, level);
    return (
      description && (
        <Animated.View key={"desc" + this.props.index} style={transform}>
          <Text
            size="large"
            key="description"
            color={textColor || "primary"}
            style={descriptionStyle}
          >
            {description}
          </Text>
        </Animated.View>
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
