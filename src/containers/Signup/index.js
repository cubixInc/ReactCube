// @flow
import { connect } from "react-redux";
import { View } from "react-native";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { TextField } from "react-native-material-textfield";
import { Text, Button } from "../../components";
import styles from "./styles";
import Util from "../../util";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    secureTextEntry: true
  };

  email;
  password;

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

  _onChangeText = text => {
    ["email", "password"]
      .map(name => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text });
        }
      });
  };

  _onSubmitEmail = () => {
    this.password.focus();
  };

  _onSubmitPassword = () => {
    this.password.blur();
  };

  _onSubmit = () => {
    const errors = {};
    let hasErrors = true;
    ["email", "password"].forEach(name => {
      const value = this[name].value();

      if (!value || ("email" === name && !Util.isEmailValid(value))) {
        errors[name] = "Invalid Email";
      } else if (!value || ("password" === name && value.length < 6)) {
        errors[name] = "Too short";
      } else {
        hasErrors = false;
      }
    });

    this.setState({ errors });
    if (!hasErrors) {
      Actions.home();
    }
  };

  render() {
    const { email, password, errors, secureTextEntry } = this.state;

    return (
      <View style={styles.container}>
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
    );
  }
}

const mapStateToProps = ({ route }) => ({
  route
});

const actions = {};

export default connect(mapStateToProps, actions)(Signup);
