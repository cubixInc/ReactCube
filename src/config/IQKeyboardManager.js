// @flow
import { Platform } from "react-native";
import KeyboardManager from "react-native-keyboard-manager";

class IQKeyboardManager {
  setEnable(enable: boolean = true) {
    if (Platform.OS === "ios") {
      KeyboardManager.setEnable(enable);
    }
  }
  setToolbarPreviousNextButtonEnable(enable: boolean = true) {
    if (Platform.OS === "ios") {
      KeyboardManager.setToolbarPreviousNextButtonEnable(enable);
    }
  }
}

export default new IQKeyboardManager();
