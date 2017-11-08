# ReactCube

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

ReactCube is complete boilerplate/starter-kit for `react-native`.

  - Magic
  - Magic
  - Magic

# New Features!

  - Commodo aliquip nulla exercitation occaecat non anim ad fugiat duis cillum laboris aliquip.
  - Commodo aliquip nulla exercitation occaecat non anim ad fugiat duis cillum laboris aliquip.


You can also:
  - Commodo aliquip nulla exercitation occaecat non anim ad fugiat duis cillum laboris aliquip
  - Commodo aliquip nulla exercitation occaecat non anim ad fugiat duis cillum laboris aliquip
  - Commodo aliquip nulla exercitation occaecat non anim ad fugiat duis cillum laboris aliquip
  
# Add ReactCube in New React Native Project

Commodo aliquip nulla exercitation occaecat non anim ad fugiat duis cillum laboris aliquip

### Step # 01 - Install Dependencies

```
yarn add lodash moment numeral axios prop-types format-unicorn base-64 react-native-animatable react-native-message-bar react-native-scrollable-tab-view react-native-swiper react-native-datepicker react-native-maps react-native-modal react-native-router-flux react-native-google-places-autocomplete react-native-keyboard-manager react-native-parsed-text react-native-animated-linear-gradient react-native-i18n react-native-linear-gradient react-native-google-analytics-bridge react-native-material-textfield
```

### Step # 02 - Install Dev Dependencies

```
yarn add --dev babel-eslint babel-preset-flow eslint-config-prettier eslint-plugin-react-native
```

### Step # 03 - Install flow-bin Dev Dependencies but look for exact version from '.flowconfig' (#last-line)

```
yarn add --dev flow-bin@###
```

### Step # 04 - Install Remaining Dev Dependencies from eslint-config-airbnb

[https://www.npmjs.com/package/eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
OR
Look for peer dependencies using following command
npm info `eslint-config-airbnb@latest` peerDependencies

### Step #5 - Paste following commands in package.json under "scripts" object

```
"flow": "flow",
"flow-stop": "flow stop",
"port-8082": "node node_modules/react-native/local-cli/cli.js start --port 8082"
```

### Step #6 - Paste following code at last line of package.json

```
"rnpm": {
  "assets": ["./src/assets/fonts"]
}
```

### Step #7 - To lLink native libraries with react native project run following command in terminal at root directory of your project

```
react-native link
```

### Step #8 - Copy & Paste /src/, .eslintrc, .vscode settings from 'ReactCube'