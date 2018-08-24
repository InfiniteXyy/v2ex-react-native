import React from "react";
import App from "./view/App";
import { createStackNavigator } from "react-navigation";
import TopicDetail from "./view/TopicDetail";
import { themeColor } from "./common/colors";

export default createStackNavigator(
  {
    Main: {
      screen: App,
      navigationOptions: ({ navigation }) => ({
        title: "V2EX",
        headerBackTitle: null,
      })
    },
    Topic: {
      screen: TopicDetail,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: themeColor.activeIcon,
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: "white"
      },
      headerTitleStyle: {
        fontSize: 18,
        color: themeColor.primaryText,
        fontWeight: "400"
      }
    }),
    cardStyle: {
      backgroundColor: themeColor.backgroundColor
    }
  }
);
