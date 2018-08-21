import React from "react";
import { StyleSheet, Platform, Text, View } from "react-native";
import propTypes from "prop-types";
import { themeColor } from '../common/colors'

export default class Toolbar extends React.PureComponent {
  static defaultProps = {};

  static propTypes = {
    title: propTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#B2B2B2"
  },
  title: {
    fontSize: 18,
    color: themeColor.primaryText,
  }
});
