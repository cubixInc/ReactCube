// @flow
import React from "react";
import { connect } from "react-redux";
import { View, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { TextField } from "react-native-material-textfield";

import styles from "./styles";
import Util from "../../../util";
import { Images } from "../../../theme";
import { Text, Swiper, Button } from "../../../components";

class AppIntro extends React.PureComponent {
  state = {
    currentPage: 0,
    lastPage: -1,
    email: "shukerullah.shah@cubixlabs.com",
    password: "123456",
    errors: {},
    secureTextEntry: true
  };

  email;
  password;

  _renderImageContainer(image1, image2) {
    return (
      <View>
        <View level={25}>
          <Image
            key="image"
            resizeMode="contain"
            source={image1}
            style={styles.image}
          />
        </View>
        <View level={15} style={{ position: "absolute" }}>
          <Image
            key="image"
            resizeMode="contain"
            source={image2}
            style={styles.image}
          />
        </View>
      </View>
    );
  }

  _renderTileContainer(title, textAlign = "left") {
    return (
      <View level={10}>
        <Text
          key="title"
          type="bold"
          size="large"
          textAlign={textAlign}
          style={styles.title}
        >
          {title}
        </Text>
      </View>
    );
  }

  _renderDescriptionContainer() {
    return (
      <View level={5}>
        <Text textAlign="center" style={styles.description}>
          Occaecat ut cillum tempor tempor incididunt velit officia cupidatat
          Lorem enim. Occaecat ut cillum tempor tempor incididunt velit officia
          cupidatat Lorem enim.
        </Text>
      </View>
    );
  }

  _renderPasswordAccessory = () => {
    const { secureTextEntry } = this.state;

    const name = secureTextEntry ? "visibility" : "visibility-off";

    return (
      <Text
        onPress={this._onAccessoryPress}
        color={TextField.defaultProps.baseColor}
      >
        {name}
      </Text>
    );
  };

  _onAccessoryPress = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    });
  };

  _onFocus = () => {
    const { errors = {} } = this.state;

    for (const name in errors) {
      const ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  };

  _onSubmitEmail = () => {
    this.password.focus();
  };

  _onSubmitPassword = () => {
    this.password.blur();
  };

  _onSubmit = () => {
    const errors = {};
    let isEmailValid = true;
    let isPasswordValid = true;

    ["email", "password"].forEach(name => {
      const value = this[name].value();

      if (name === "email" && !Util.isEmailValid(value)) {
        isEmailValid = false;
        errors[name] = "Invalid Email";
      } else if (name === "password" && !Util.isPasswordValid(value)) {
        isPasswordValid = false;
        errors[name] = "Too short";
      }
    });

    this.setState({ errors });
    if (isEmailValid && isPasswordValid) {
      Actions.home();
    }
  };

  _renderLogin() {
    const { email, password, errors, secureTextEntry } = this.state;
    return (
      <View level={-100} style={styles.login}>
        <View style={styles.loginTitle}>
          <Image source={Images.logo} />
        </View>

        <View style={{ flex: 2 }}>
          <TextField
            ref={ref => {
              this.email = ref;
            }}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            onFocus={this._onFocus}
            onChangeText={value => this.setState({ email: value })}
            onSubmitEditing={this._onSubmitEmail}
            returnKeyType="next"
            label="Email Address"
            error={errors.email}
            title=" "
          />

          <TextField
            ref={ref => {
              this.password = ref;
            }}
            value={password}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            onFocus={this._onFocus}
            onChangeText={value => this.setState({ password: value })}
            onSubmitEditing={this._onSubmitPassword}
            returnKeyType="done"
            label="Password"
            error={errors.password}
            title="Choose wisely"
            maxLength={30}
            characterRestriction={20}
            renderAccessory={this._renderPasswordAccessory}
          />

          <Button
            onPress={this._onSubmit}
            style={styles.button}
            color={TextField.defaultProps.tintColor}
          >
            Submit
          </Button>
        </View>
      </View>
    );
  }

  render() {
    const { currentPage, lastPage } = this.state;

    return (
      <View style={styles.container}>
        <Swiper
          loop={false}
          scrollEnabled={currentPage !== lastPage}
          showsPagination={currentPage !== lastPage}
          onMomentumScrollEnd={(e, { index, total }) =>
            this.setState({ currentPage: index, lastPage: total - 1 })}
        >
          <View style={styles.page}>
            {this._renderImageContainer(Images.plan, Images.clouds_2)}
            {this._renderTileContainer("Search Flights")}
            {this._renderDescriptionContainer()}
          </View>
          <View style={styles.page}>
            {this._renderImageContainer(Images.building, Images.clouds_1)}
            {this._renderTileContainer("Search Hotels")}
            {this._renderDescriptionContainer()}
          </View>
          <View style={styles.page}>
            {this._renderImageContainer(Images.plan, Images.clouds_2)}
            {this._renderTileContainer("Search Events")}
            {this._renderDescriptionContainer()}
          </View>
          {this._renderLogin()}
        </Swiper>
      </View>
    );
  }
}

export default connect()(AppIntro);
