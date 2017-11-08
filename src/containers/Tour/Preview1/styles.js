// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary
  },
  page: {
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
    width: Metrics.screenWidth / 2,
    height: Metrics.screenWidth / 2
  },
  description: {
    marginHorizontal: Metrics.doubleBaseMargin
  },
  footer: {
    right: 10,
    bottom: 10,
    width: 100,
    position: "absolute"
  },
  login: {
    flex: 1,
    justifyContent: "center",
    padding: Metrics.baseMargin,
    backgroundColor: Colors.background.primary
  },
  button: {
    marginTop: Metrics.ratio(30)
  },
  loginTitle: {
    flex: 1,
    marginTop: Metrics.ratio(10),
    justifyContent: "center",
    alignItems: "center"
  }
});
