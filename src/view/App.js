import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import MessageScreen from "./MessageScreen";
import MineScreen from "./MineScreen";

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,
    Message: MessageScreen,
    Mine: MineScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name={"ios-home"} type={"ionicon"} color={tintColor} />;
      }
    })
  }
);
