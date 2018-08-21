import React from "react";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import MessageScreen from "./MessageScreen";
import MineScreen from "./MineScreen";
import { themeColor } from "../common/colors";
import AddScreen from "./AddScreen";

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name={"add-circle"} color={themeColor.primaryColor} size={45} />
        ),
        tabBarOnPress: ({ navigation }) => {}
      }
    },
    Message: MessageScreen,
    Mine: MineScreen
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: themeColor.primaryColor,
      style: {
        borderTopWidth: 0.25,
        borderTopColor: "#d1d1d1",
        backgroundColor: "white"
      }
    },

    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconProp;
        if (routeName === "Home") {
          iconProp = { name: "home", type: "enpyto" };
        } else if (routeName === "Explore") {
          iconProp = { name: "explore", type: "materail" };
        } else if (routeName === "Message") {
          iconProp = { name: "ios-notifications", type: "ionicon" };
        } else {
          iconProp = { name: "md-person", type: "ionicon" };
        }
        return <Icon {...iconProp} color={tintColor} />;
      }
    })
  }
);
