// @flow
import { StyleSheet, Platform } from "react-native";
import { Metrics, Fonts, Colors } from "../theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: Colors.navbar.background
  },
  title: {
    // TODO: To center title on android add bellow styles
    // paddingHorizontal: Platform.OS === "ios" ? 70 : 56,
    // textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    marginHorizontal: 16,
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.bold,
    color: Colors.navbar.text,
    fontWeight: "normal"
  }
});
