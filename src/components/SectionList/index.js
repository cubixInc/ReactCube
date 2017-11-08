// @flow
import React from "react";
import PropTypes from "prop-types";
import { SectionList as SectionListRN } from "react-native";
import Util from "../../util";
import { Separator, Spacer } from "../";

export default class SectionList extends React.PureComponent {
  static propTypes = {
    keyExtractor: PropTypes.func,
    sections: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    renderSectionHeader: PropTypes.func.isRequired,
    ItemSeparatorComponent: PropTypes.func,
    renderSectionFooter: PropTypes.func,
    stickySectionHeadersEnabled: PropTypes.bool
  };

  static defaultProps = {
    keyExtractor: Util.keyExtractor,
    stickySectionHeadersEnabled: false,
    ItemSeparatorComponent: () => <Separator />,
    renderSectionFooter: ({ section }) => {
      if (section.last) return null;
      return <Spacer />;
    }
  };

  render() {
    const { ...rest } = this.props;
    return <SectionListRN {...rest} />;
  }
}
