// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background.primary
  },
  title: {
    margin: Metrics.baseMargin
  },
  image: {
    margin: Metrics.baseMargin,
    width: Metrics.screenWidth / 3,
    height: Metrics.screenWidth / 3
  },
  description: {
    marginHorizontal: Metrics.doubleBaseMargin
  }
});
