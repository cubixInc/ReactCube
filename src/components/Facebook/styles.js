// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    elevation: 2,
    alignItems: "center",
    padding: Metrics.ratio * 12,
    backgroundColor: Colors.facebook,
    borderRadius: Metrics.borderRadius
  }
});
