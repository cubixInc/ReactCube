// @flow
import { StyleSheet } from "react-native";
import { Metrics } from "../../theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  line: {
    flex: 1,
    height: 1
  },
  content: {
    margin: Metrics.baseMargin
  }
});
