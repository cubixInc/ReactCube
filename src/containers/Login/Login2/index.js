// @flow
import { connect } from "react-redux";
import { View, Image, TextInput, StatusBar } from "react-native";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { Images, Colors } from "../../../theme";
import { Text, Button, GradientView, OR } from "../../../components";

class Login extends Component {
  static navigationOptions = { header: null };

  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("default");
  }

  email;
  password;

  _onSubmitEmail = () => {
    this.password.focus();
  };

  _onSubmitPassword = () => {
    this.password.blur();
  };

  _onSubmit = () => {
    Actions.home();
  };

  render() {
    const { email, password } = this.state;

    return (
      <GradientView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <View style={[styles.inputContainer, styles.spaceTop]}>
            <TextInput
              ref={ref => {
                this.email = ref;
              }}
              value={email}
              autoCorrect={false}
              style={styles.input}
              returnKeyType="next"
              autoCapitalize="none"
              placeholder="Email Address"
              keyboardType="email-address"
              enablesReturnKeyAutomatically
              onChangeText={value => this.setState({ email: value })}
              onSubmitEditing={this._onSubmitEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              ref={ref => {
                this.password = ref;
              }}
              secureTextEntry
              value={password}
              autoCorrect={false}
              style={styles.input}
              returnKeyType="done"
              autoCapitalize="none"
              placeholder="Password"
              enablesReturnKeyAutomatically
              onChangeText={value => this.setState({ password: value })}
              onSubmitEditing={this._onSubmitPassword}
            />
          </View>

          <Button
            color="tertiary"
            background="transparent"
            onPress={this._onSubmit}
            style={styles.button}
          >
            Log In
          </Button>
          <Text size="xxSmall" color="tertiary" textAlign="center">
            Forgot your login details?{" "}
            <Text type="bold" size="xxSmall" color="tertiary">
              Get help Signin in.
            </Text>
          </Text>

          <OR style={styles.spaceTop} />
          <Button icon="facebook" background={Colors.facebook} color="tertiary">
            Login With Facebook
          </Button>
        </View>
      </GradientView>
    );
  }
}

const mapStateToProps = ({ route }) => ({
  route
});

const actions = {};

export default connect(mapStateToProps, actions)(Login);
