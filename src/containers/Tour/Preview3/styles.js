// @flow
import { StyleSheet } from "react-native";
import { Colors } from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary
  },
  footer: {
    right: 10,
    bottom: 10,
    width: 100,
    position: "absolute"
  }
});
