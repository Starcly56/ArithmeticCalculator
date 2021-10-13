import React from "react";
import { StyleSheet, Text, View, I18nManager } from "react-native";
import CalculatorScreen from "./screen/CalculatorScreen";
I18nManager.allowRTL(false);
export default class App extends React.Component {
  render() {
    return <CalculatorScreen />;
  }
}
