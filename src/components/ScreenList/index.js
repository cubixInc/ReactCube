// @flow
import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { FlatList, SectionList } from "../";
import { Colors, Images } from "../../theme";

export default class ScreenList extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array
  };
  // static defaultProps = {
  //   data: [
  //     {
  //       title: "About App",
  //       navigate: "AboutAppScreen"
  //     },
  //     {
  //       title: "Privacy Policy",
  //       navigate: "PrivacyPolicyScreen"
  //     },
  //     {
  //       title: "Terms & Conditions",
  //       navigate: "TermsConditionsScreen"
  //     },
  //     {
  //       title: "Push Notification Settings",
  //       toggle: {
  //         value: true,
  //         serviceEndPoint: ""
  //       }
  //     }
  //   ]
  // };
  static defaultProps = {
    data: [
      {
        title: "PROFILE SETTINGS",
        data: [
          {
            title: "Edit Profile"
          },
          {
            title: "Change Password"
          },
          {
            title: "Send Push Notification",
            toggle: {
              value: true,
              serviceEndPoint: ""
            }
          },
          {
            title: "Refresh Automatically",
            toggle: {
              value: true,
              serviceEndPoint: ""
            }
          }
        ]
      },
      {
        title: "FIND FRIENDS",
        data: [
          {
            title: "Find Friends With Twitter",
            color: Colors.twitter,
            leftImage: Images.twitter
          },
          {
            title: "Find Friends With Google",
            color: Colors.google,
            leftImage: Images.google
          },
          {
            title: "Find Friends With Facebook",
            color: Colors.facebook,
            leftImage: Images.facebook
          }
        ]
      },
      {
        last: true,
        title: "SUPPORT",
        data: [
          {
            title: "Help"
          },
          {
            title: "Privacy Policy"
          },
          {
            title: "Terms & Conditions"
          },
          {
            title: "Logout"
          }
        ]
      }
    ]
  };
  _renderSectionHeader = info => (
    <ListItem background="primary" color="accent" {...info.section} />
  );
  _renderItem = info => <ListItem {...info.item} />;
  render() {
    const { data } = this.props;
    if (data[0].data && Array.isArray(data[0].data)) {
      return (
        <SectionList
          sections={data}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
        />
      );
    }

    return <FlatList data={data} renderItem={this._renderItem} />;
  }
}
