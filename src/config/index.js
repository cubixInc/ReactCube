// @flow
import { Text } from "react-native";
import IQKeyboardManager from "./IQKeyboardManager";
import DebugSettings from "./DebugSettings";
import AppConfig from "./AppConfig";

export default () => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.disableYellowBox = !DebugSettings.yellowBox;
  }

  // Allow/disallow IQKeyboardManager in app
  IQKeyboardManager.setEnable(AppConfig.allowIQKeyboardManager);
  IQKeyboardManager.setToolbarPreviousNextButtonEnable(
    AppConfig.allowIQKeyboardManagerToolbar
  );

  // Allow/disallow font-scaling in app
  Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling;
};
