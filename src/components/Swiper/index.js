// @flow
import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Animated } from "react-native";
import SwiperRN from "react-native-swiper";

import Page from "./Page";
import styles from "./styles";

export default class Swiper extends Component {
  static propTypes = {
    data: PropTypes.array,
    children: PropTypes.node,
    renderPage: PropTypes.func,
    scrollEventThrottle: PropTypes.number
  };

  static defaultProps = {
    data: undefined,
    children: undefined,
    scrollEventThrottle: 16,
    renderPage: (width, height, parallax, page, index, pages) => (
      <Page
        key={index}
        page={page}
        pages={pages}
        index={index}
        width={width}
        height={height}
        parallax={parallax}
      />
    )
  };

  state = {
    width: 0,
    height: 0,
    parallax: new Animated.Value(0)
  };

  getRef = () => this.ref;

  ref = undefined;

  _getTransform = (index, offset, level) => {
    const windowsWidth = this.state.width;
    const isFirstPage = index === 0;
    const statRange = isFirstPage ? 0 : windowsWidth * (index - 1);
    const endRange = isFirstPage ? windowsWidth : windowsWidth * index;
    const startOpacity = isFirstPage ? 1 : 0;
    const endOpacity = isFirstPage ? 0 : 1;
    const leftPosition = isFirstPage ? 0 : windowsWidth / 3;
    const rightPosition = isFirstPage ? -windowsWidth / 3 : 0;
    const transform = [
      {
        transform: [
          {
            translateX: this.state.parallax.interpolate({
              inputRange: [statRange, endRange],
              outputRange: [
                isFirstPage ? leftPosition : leftPosition - offset * level,
                isFirstPage ? rightPosition + offset * level : rightPosition
              ]
            })
          }
        ]
      },
      {
        opacity: this.state.parallax.interpolate({
          inputRange: [statRange, endRange, endRange + windowsWidth],
          outputRange: [startOpacity, endOpacity, startOpacity]
        })
      }
    ];
    return {
      transform
    };
  };

  _renderChild = (node, index, key = "root") => {
    const { style, level, children } = node.props;
    let nodes = node;
    if (Array.isArray(children)) {
      nodes = children.map((item, i) =>
        this._renderChild(item, index, `root_${i}`)
      );
    }
    let parent = children;
    if (level) {
      const { transform } = this._getTransform(index, 10, level);
      parent = (
        <Animated.View key={key} style={[style, transform]}>
          {nodes}
        </Animated.View>
      );
    } else {
      parent = (
        <View key={key} style={style}>
          {nodes}
        </View>
      );
    }
    return parent;
  };

  _renderContent(data: Object, renderPage: Function) {
    return data.map(renderPage);
  }

  render() {
    const { width, height, parallax } = this.state;
    const {
      data,
      children,
      renderPage,
      scrollEventThrottle,
      ...rest
    } = this.props;
    let nodes;
    if (children) {
      nodes = children.map(this._renderChild);
    } else if (data) {
      nodes = renderPage.bind(this, width, height, parallax); // eslint-disable-line react/jsx-no-bind
    } else {
      // eslint-disable-next-line no-console
      console.error("No Children or data found");
      return null;
    }
    return (
      <View
        style={styles.container}
        onLayout={({ nativeEvent }) =>
          this.setState({
            width: nativeEvent.layout.width,
            height: nativeEvent.layout.height
          })}
      >
        <SwiperRN
          width={width}
          height={height}
          ref={ref => {
            this.ref = ref;
          }}
          scrollEventThrottle={scrollEventThrottle}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.parallax } } }
          ])}
          {...rest}
        >
          {children ? nodes : this._renderContent(data, nodes)}
        </SwiperRN>
      </View>
    );
  }
}
