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

class Policy extends Component {
  render() {
    return <WebView source={{ html }} />;
  }
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<style>
		.container{
			margin:0 auto;

		}
		h1{
			color: #000;
			margin-bottom: 15px;
			font-size: 40px;
			font-weight: 500;
			font-family: 'Roboto', sans-serif;
			line-height: 1.2;
			margin-top: 25px;
			text-align:center;
		}
		h2{
			color: #000;
			margin-bottom: 15px;
			font-size: 30px;
			font-weight: 500;
			font-family: 'Roboto', sans-serif;
			line-height: 1.2;
			margin-top: 25px;
		}
		h3{
			color: #000;
			margin-bottom: 15px;
			font-size: 20px;
			font-weight: 700;
			font-family: 'Roboto', sans-serif;
			line-height: 1.2;
			margin-top: 25px;
		}
		p{
			font-family: 'Roboto', sans-serif;
			text-align: left;
			line-height: 26px;
			font-weight: 300;
			font-style: normal;
			color: #000;
			font-size: 18px;
		}
		ul{
		
		}
		li{
			font-family: 'Roboto', sans-serif;
			text-align: left;
			line-height: 26px;
			font-weight: 300;
			font-style: normal;
			color: #000;
			font-size: 17px;
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
		<h1>Groov Privacy Policy</h1>
		<p style="text-align:center;">~A household cooking weapon</p>
		
		<p>	This privacy policy has been compiled to better serve those who are concerned with how their 
			'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law
			and information security, is information that can be used on its own or with other information to
			identify, contact, or locate a single person, or to identify an individual in context. Please read
			our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise 
			handle your Personally Identifiable Information in accordance with our website.
		</p>
		<h2>What personal information do we collect from the people that visit our blog, website or app?</h2>
		<p>When ordering or registering on our site, as appropriate, you may be asked to enter your name or other details to help you with your experience.</p>
		
		<h2>When do we collect information?</h2>
		<p>We collect information from you when you register on our site, subscribe to a newsletter, respond to a survey, fill out a form or enter information on our site.</p>
				
		<h2>How do we use your information?</h2>
		<p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
		<ul>
			<li>To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
			<li>To improve our website in order to better serve you.</li>
			<li>To allow us to better service you in responding to your customer service requests.</li>
			<li>To administer a contest, promotion, survey or other site feature.</li>
			<li>To send periodic emails regarding your order or other products and services.</li>
		</ul>
		<h2>How do we protect visitor information?</h2>
		<p>
			We do not use vulnerability scanning and/or scanning to PCI standards.
			We do not use Malware Scanning.
		</p>
		<p>We do not use an SSL certificate</p>
		<ul>
			<li>We only provide articles and information, we never ask for personal or private information like email addresses, or credit card numbers.</li>
		</ul>
		
		<h2>Do we use 'cookies'?</h2>
		<p>We do not use cookies for tracking purposes</p>		
		<p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.</p>
		<p>If you disable cookies off, some features will be disabled that make your site experience more efficient and some of our services will not function properly.</p>
		<p>However, you can still place orders .</p>

		<h2>Third Party Disclosure</h2>
		<p>
			We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. 
		</p>
		<p>
		However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
		</p>
		<h2>Third party links</h2>
		<p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
		
		<h2>Google</h2>
		<p style="word-wrap: break-word;">
			Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en 
		</p>
		<p>
			We have not enabled Google AdSense on our site but we may do so in the future.
		</p>
		
		<h2>COPPA (Children Online Privacy Protection Act)</h2>
		<p>When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>
		<p>We do not specifically market to children under 13.</p>
	
		<h2>Fair Information Practices</h2>
		<p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
		<h3>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</h3>
		<p>We will notify the users via in site notification</p>
		<ul>
			<li>Within 7 business days</li>
		</ul>
		<p>We also agree to the individual redress principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or a government agency to investigate and/or prosecute non-compliance by data processors.</p>
		
		<h2>CAN SPAM Act</h2>
		
		<p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>
		
		
		<h3>We collect your email address in order to:</h3>
		<h3>To be accordance with CANSPAM we agree to the following:</h3>
		<h2>If at any time you would like to unsubscribe from receiving future emails, you can</h2>
		<p>and we will promptly remove you from <strong>ALL</strong> correspondence.</p>
	

		<h2>Contacting Us</h2>
		
		<p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>
		<p>richthomasllc.com</p>
		<p>United States</p>
		<p>VA</p>
		<p>info@richthomasllc.com</p>

	</div>
</body>
</html>
`;

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(Policy);
