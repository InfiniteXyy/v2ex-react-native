import React from "react";
import { FlatList, RefreshControl } from "react-native";
import propTypes from "prop-types";
import { fetchList } from "../utils/api";
import TopicListItem from "./TopicListItem";

export default class TopicList extends React.Component {
  static propTypes = {
    topicType: propTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      refreshing: false
    };
  }

  componentDidMount() {
    fetchList(this.props.topicType, result => {
      this.setState({ listData: result });
    });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchList(this.props.topicType, result => {
      this.setState({ listData: result, refreshing: false });
      this.forceUpdate()
    });
  };

  render() {
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        data={this.state.listData}
        renderItem={({ item }) => <TopicListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
