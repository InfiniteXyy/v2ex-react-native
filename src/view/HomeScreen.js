import React from "react";
import { createStackNavigator } from "react-navigation";
import TopicView from "./TopicView";
import { themeColor } from "../common/colors";
import TopicDetail from "./TopicDetail";

export default createStackNavigator(
  {
    Main: {
      screen: TopicView,
      navigationOptions: ({ navigation }) => ({
        title: "V2EX"
      })
    },
    Topic: TopicDetail
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        borderBottomWidth: 0.25,
        borderBottomColor: "#d1d1d1"
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
