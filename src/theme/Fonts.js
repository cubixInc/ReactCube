// @flow
// Android
// title 20
// Heading 16
// desc 14

// ios
// title 20
// Heading 20
// desc 17

import { Platform } from "react-native";
import Metrics from "./Metrics";

const type = {
  base: Platform.select({
    ios: "Helvetica Neue",
    android: "Roboto"
  }),
  bold: Platform.select({
    ios: "HelveticaNeue-Medium",
    android: "Roboto"
  }),
  italic: Platform.select({
    ios: "HelveticaNeue-Italic",
    android: "Roboto"
  })
};

// Metrics.generatedFontSize(ios, android)

const size = {
  xxxSmall: Metrics.generatedFontSize(11),
  xxSmall: Metrics.generatedFontSize(13),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  normal: Metrics.generatedFontSize(17),
  medium: Metrics.generatedFontSize(18),
  large: Metrics.generatedFontSize(20),
  xLarge: Metrics.generatedFontSize(24),
  xxLarge: Metrics.generatedFontSize(30),
  xxxLarge: Metrics.generatedFontSize(40)
};

export default {
  type,
  size
};
