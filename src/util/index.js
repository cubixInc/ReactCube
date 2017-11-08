// @flow
import { Platform } from "react-native";

class Util {
  keyExtractor = (item: Object, index: number) => index;
  isPlatformAndroid() {
    return Platform.OS === "android";
  }
  isValidURL(url: "string") {
    const re = /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }
  isEmailValid(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  isPasswordValid(password: string) {
    return password.length > 5;
  }
  getValidImage(image: any) {
    if (typeof image === "string" && this.isValidURL(image)) {
      return { uri: image };
    }
    // if (typeof image === "string" && !this.isValidURL(image)) {
    //   return require(image);
    // }
    return image;
  }
}

export default new Util();
