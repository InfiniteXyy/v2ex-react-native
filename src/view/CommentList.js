import React from "react";
import { View, FlatList } from "react-native";
import CommentListItem from "./CommentListItem";
import { fetchReplies } from "../utils/api";
import propTypes from "prop-types";

export default class CommentList extends React.Component {
  static propTypes = {
    topic_id: propTypes.number.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
  }

  componentDidMount() {
    fetchReplies(this.props.topic_id, 0, result => {
      this.setState({ commentList: result });
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.commentList}
          renderItem={({ item, index }) => (
            <CommentListItem commentItem={item} index={index} />
          )}
          keyExtractor={ item  => item.id.toString()}
        />
      </View>
    );
  }
}
