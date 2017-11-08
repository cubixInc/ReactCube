// @flow
import React from "react";
import { connect } from "react-redux";
import { View, Image } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "./styles";
import { Images } from "../../../theme";
import { Text, Swiper, Button } from "../../../components";

class AppIntro extends React.PureComponent {
  state = {
    currentPage: 0,
    lastPage: -1
  };

  _renderImageContainer(image1, image2) {
    return (
      <View>
        <View level={25}>
          <Image
            key="image"
            resizeMode="contain"
            source={image1}
            style={styles.image}
          />
        </View>
        <View level={15} style={{ position: "absolute" }}>
          <Image
            key="image"
            resizeMode="contain"
            source={image2}
            style={styles.image}
          />
        </View>
      </View>
    );
  }

  _renderTileContainer(title) {
    return (
      <View level={10}>
        <Text key="title" type="bold" size="large" style={styles.title}>
          {title}
        </Text>
      </View>
    );
  }

  _renderDescriptionContainer() {
    return (
      <View level={5}>
        <Text textAlign="center" style={styles.description}>
          Occaecat ut cillum tempor tempor incididunt velit officia cupidatat
          Lorem enim. Occaecat ut cillum tempor tempor incididunt velit officia
          cupidatat Lorem enim.
        </Text>
      </View>
    );
  }

  render() {
    const { currentPage, lastPage } = this.state;
    return (
      <View style={styles.container}>
        <Swiper
          loop={false}
          onMomentumScrollEnd={(e, { index, total }) =>
            this.setState({ currentPage: index, lastPage: total - 1 })}
        >
          <View style={styles.page}>
            {this._renderImageContainer(Images.plan, Images.clouds_2)}
            {this._renderTileContainer("Search Flights")}
            {this._renderDescriptionContainer()}
          </View>
          <View style={styles.page}>
            {this._renderImageContainer(Images.building, Images.clouds_1)}
            {this._renderTileContainer("Search Hotels")}
            {this._renderDescriptionContainer()}
          </View>
          <View style={styles.page}>
            {this._renderImageContainer(Images.plan, Images.clouds_2)}
            {this._renderTileContainer("Search Events")}
            {this._renderDescriptionContainer()}
          </View>
        </Swiper>
        {currentPage === lastPage && (
          <View style={styles.footer}>
            <Button background="transparent" onPress={Actions.login}>
              Done
            </Button>
          </View>
        )}
      </View>
    );
  }
}

export default connect()(AppIntro);
