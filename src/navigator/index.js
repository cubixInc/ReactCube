// @flow
import React from "react";
import { connect } from "react-redux";
import {
  Stack,
  Scene,
  Drawer,
  Router,
  Actions,
  ActionConst
} from "react-native-router-flux";

// import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";
// transitionConfig={() => ({
//   screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid
// })}

import styles from "./styles";
import { Colors, Images } from "../theme";

import { ScreenList } from "../components";

import {
  About,
  Chat,
  FormBuilder,
  Home,
  Login,
  Policy,
  Settings,
  Signup,
  Terms,
  Tour
} from "../containers";

const navigator = Actions.create(
  <Stack
    key="root"
    titleStyle={styles.title}
    headerStyle={styles.header}
    headerTintColor={Colors.navbar.text}
  >
    <Drawer
      drawer
      hideNavBar
      key="home"
      title="Home"
      type={ActionConst.RESET}
      drawerImage={Images.drawer}
      contentComponent={ScreenList}
    >
      <Scene hideNavBar>
        <Stack key="root">
          <Scene
            key="_home"
            title="Home"
            component={Home}
            rightTitle="Settings"
            onRight={() => Actions.settings()}
          />
          <Scene
            key="settings"
            title="Settings"
            component={Settings}
            onLeft={() => Actions.pop()}
            leftButtonImage={Images.back}
          />
          <Scene
            key="about"
            title="About"
            component={About}
            onLeft={() => Actions.pop()}
            leftButtonImage={Images.back}
          />
          <Scene
            key="policy"
            component={Policy}
            title="Privacy Policy"
            onLeft={() => Actions.pop()}
            leftButtonImage={Images.back}
          />
          <Scene
            key="terms"
            component={Terms}
            title="Terms & Conditions"
            onLeft={() => Actions.pop()}
            leftButtonImage={Images.back}
          />
          <Scene
            key="chat"
            title="Discussion"
            component={Chat}
            onLeft={() => Actions.pop()}
            leftButtonImage={Images.back}
          />
          <Scene
            key="formBuilder"
            title="Form Builder"
            component={FormBuilder}
            onLeft={() => Actions.pop()}
            leftButtonImage={Images.back}
          />
        </Stack>
      </Scene>
    </Drawer>
    <Scene
      key="login"
      title="Login"
      component={Login.Login1}
      type={ActionConst.RESET}
    />
    <Scene key="signup" component={Signup} title="Signup" />
    <Scene hideNavBar key="tour" component={Tour.Preview1} initial />
  </Stack>
);

export default () => <AppNavigator navigator={navigator} />;

const AppNavigator = connect()(Router);
