// @flow

/*
Disable selection style
style="-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;"

Word wrap and break word style
style="word-wrap: break-word;"
*/
import { connect } from "react-redux";
import React, { Component } from "react";
import { WebView } from "../../components";

class Terms extends Component {
  render() {
    return <WebView source={{ html }} />;
  }
}

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
	<style>
		.container {
			margin: 0 auto;
		}

		h2 {
			color: #000;
			margin-bottom: 15px;
			font-size: 30px;
			font-weight: 700;
			font-family: 'Roboto', sans-serif;
			line-height: 1.2;
			margin-top: 25px;
		}

		p {
			font-family: 'Roboto', sans-serif;
			text-align: left;
			line-height: 26px;
			font-weight: 300;
			font-style: normal;
			color: #000;
			font-size: 18px;
		}
	</style>
</head>

<body>
	<div class="container" style="-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;">
		<h2>Disclaimer</h2>

		<p>Always make sure to double check recipe and component ingredients (and where they are produced) if you have any health
			related issues to avoid particular foods. Please make sure to consult a doctor and always double check labels. Please
			notify us of any errors on the recipes itself. We strive to make information as acurate as possible for convenience, however
			we disclaim any warranty on it.</p>
		<p>Always consult a licensed physician or licesned nutritionalist for all medical, dietary and allergen issues. All information
			on our site “as is” has no warranty on it of any kind. Either expressed or implied. </p>
		<p>Rich thomas LLC and its partners disclaim all warranties expressed or implied including without limitation those of merchanitbility
			or fitness for a particular purpose and non fringement or arsiing from a course of dealing, usage, or trade practice.
			Rich Thomas LLC shall not be liable for any indirect, special, consequential, or incidental damages arising from any information
			present.</p>
	</div>
</body>

</html>`;

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(Terms);
