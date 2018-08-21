import React from "react";
import { FlatList, Text } from "react-native";
import { fetchList } from "../utils/api";
import TopicListItem from "./TopicListItem";

export default class TopicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  componentDidMount() {
    fetchList("最新", result => {
      this.setState({ listData: result });
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.listData}
        renderItem={({ item }) => <TopicListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
