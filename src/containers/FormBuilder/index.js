// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { findNodeHandle, Alert } from "react-native";
import { TextField } from "react-native-material-textfield";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import { Button } from "../../components";

const data = [
  {
    type: "input",
    label: "First Name",
    maxLength: 30,
    characterRestriction: 20,
    returnKeyType: "next"
  },
  {
    type: "input",
    label: "Last Name",
    returnKeyType: "next"
  },
  {
    type: "input",
    label: "Address",
    multiline: true
  }
];

/*
ref={ref => {
  this.email = ref;
}}
error={errors.email}
keyboardType="email-address"
returnKeyType="next"
autoCapitalize="none"
autoCorrect={false}
enablesReturnKeyAutomatically
onFocus={this._onFocus}
onChangeText={value => this.setState({ email: value })}
onSubmitEditing={this._onSubmitEmail}
*/

class FormBuilder extends Component {
  state = {
    data: {},
    isLoading: false
  };

  scroll;
  height = [];
  fields = [];

  _focusNext(index) {
    let focused = false;
    if (this.fields[index + 1]) {
      focused = true;
      this.fields[index + 1].focus();
    }
    return focused;
  }

  _scrollToInput(eventTarget: any) {
    this.scroll.scrollToFocusedInput(findNodeHandle(eventTarget));
  }

  _onContentSizeChange(event, multiline, index) {
    if (multiline) {
      const { target, nativeEvent } = event;
      if (
        nativeEvent &&
        nativeEvent.contentSize &&
        nativeEvent.contentSize.height !== this.height[index]
      ) {
        if (this.height) {
          this._scrollToInput(target);
        }
        this.height[index] = event.nativeEvent.height;
      }
    }
  }

  _onSubmitEditing(index) {
    if (!this._focusNext(index)) {
      this._onSubmit();
    }
  }

  _renderInputText(
    { label = " ", title = " ", multiline = false, ...rest },
    index
  ) {
    return (
      <TextField
        ref={ref => {
          this.fields.push(ref);
        }}
        key={index}
        label={label}
        title={title}
        multiline={multiline}
        {...rest}
        onContentSizeChange={event =>
          this._onContentSizeChange(event, multiline, index)}
        onSubmitEditing={() => this._onSubmitEditing(index)}
      />
    );
  }

  _onSubmit = () => {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
      Alert.alert(
        "Form Build",
        "Form Submitted Successfully",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }, 3000);
  };

  render() {
    const { isLoading } = this.state;
    return (
      <KeyboardAwareScrollView
        ref={ref => {
          this.scroll = ref;
        }}
        style={styles.container}
      >
        {data.map((item, index) => this._renderInputText(item, index))}
        <Button isLoading={isLoading} onPress={this._onSubmit}>
          Submit
        </Button>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(FormBuilder);
