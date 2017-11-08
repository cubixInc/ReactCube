// @flow
import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "./styles";
import { Images } from "../../../theme";
import { Swiper, Button } from "../../../components";

const data = [
  {
    imageSource: Images.plan,
    title: "Search Flights",
    description:
      "Do velit aliqua in eu. Irure irure nulla cupidatat tempor deserunt dolor aliquip commodo sit."
  },
  {
    imageSource:
      "https://61978.apps.zdusercontent.com/61978/assets/1481841069-b3f33f8b4f2e144a10a72ee1b97372d7/logo.png",
    title: "Aute sint cupidatat tempor minim.",
    description:
      "Do velit aliqua in eu. Irure irure nulla cupidatat tempor deserunt dolor aliquip commodo sit."
  },
  {
    imageSource:
      "https://61978.apps.zdusercontent.com/61978/assets/1481841069-b3f33f8b4f2e144a10a72ee1b97372d7/logo.png",
    title: "Aute sint cupidatat tempor minim.",
    description:
      "Do velit aliqua in eu. Irure irure nulla cupidatat tempor deserunt dolor aliquip commodo sit."
  }
];

class AppIntro extends React.PureComponent {
  state = {
    currentPage: 0,
    lastPage: -1
  };

  render() {
    const { currentPage, lastPage } = this.state;
    return (
      <View style={styles.container}>
        <Swiper
          loop={false}
          data={data}
          onMomentumScrollEnd={(e, { index, total }) =>
            this.setState({ currentPage: index, lastPage: total - 1 })}
        />
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
