// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import IQKeyboardManager from "../../config/IQKeyboardManager";

class Chat extends Component {
  state = {
    messages: []
  };

  componentWillMount() {
    IQKeyboardManager.setEnable(false);
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello, How Are you?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://facebook.github.io/react/img/logo_og.png"
          }
        }
      ]
    });
  }

  componentWillUnmount() {
    IQKeyboardManager.setEnable(true);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(Chat);
