// @flow
import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.doubleBaseMargin
  },
  inputContainer: {
    padding: Metrics.baseMargin,
    borderRadius: Metrics.borderRadius,
    marginVertical: Metrics.smallMargin,
    backgroundColor: Colors.windowTintWhite
  },
  input: {
    color: Colors.text.tertiary,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.primary
  },
  spaceTop: {
    marginTop: Metrics.doubleBaseMargin
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Metrics.ratio(30)
  },
  logo: {
    resizeMode: "contain",
    width: Metrics.icon.xxxLarge,
    height: Metrics.icon.xxxLarge
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.primary,
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin
  }
});
