// @flow
import React from "react";
import PropTypes from "prop-types";
import { FlatList as FlatListRN } from "react-native";
import Util from "../../util";
import { Separator } from "../";

export default class FlatList extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    keyExtractor: PropTypes.func,
    ItemSeparatorComponent: PropTypes.func
  };

  static defaultProps = {
    keyExtractor: Util.keyExtractor,
    ItemSeparatorComponent: () => <Separator />
  };

  render() {
    const { ...rest } = this.props;
    return <FlatListRN {...rest} />;
  }
}
