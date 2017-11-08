// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: Metrics.baseMargin
  },
  body: {
    flex: 1,
    backgroundColor: Colors.transparent,
    marginHorizontal: Metrics.smallMargin
  },
  edgeContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.transparent
  },
  icon: {
    width: Metrics.icon.normal,
    height: Metrics.icon.normal
  }
});
