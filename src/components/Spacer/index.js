// @flow
import React from "react";
import { View } from "react-native";
import styles from "./styles";

export default ({ ...rest }: Object) => (
  <View style={styles.container} {...rest} />
);
