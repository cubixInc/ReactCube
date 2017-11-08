// @flow
import React from "react";
import PropTypes from "prop-types";
import { WebView as WebViewRn } from "react-native";

export default class WebView extends React.PureComponent {
  static propTypes = {
    source: PropTypes.object
  };
  static defaultProps = {
    source: {
      html: `
				<html>
					<header>
						<style>
							html, body {
								height: 100%;
							}
							html {
								display: table;
								margin: auto;
							}
							body {
  							text-align: center;
								display: table-cell;
								vertical-align: middle;
							}
						</style>
					</header>
					<body>
						<p>No valid HTML provided</p>
						<p>source props is missing</p>
					</body>
				</html>
			`
    }
  };

  render() {
    const { source, ...rest } = this.props;
    return <WebViewRn source={source} {...rest} />;
  }
}
