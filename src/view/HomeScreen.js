import React from "react";
import TopicView from "./TopicView";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabView from "../components/TabView";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <TabView style={{ backgroundColor: "white" }} />}
      >
        <TopicView tabLabel="最热" type={"hot"} />
        <TopicView tabLabel="最新" type={"latest"} />
      </ScrollableTabView>
    );
  }
}
