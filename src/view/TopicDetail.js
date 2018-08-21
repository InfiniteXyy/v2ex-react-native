import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { colors, themeColor } from "../common/colors";
import moment from "moment";
import Markdown from "react-native-markdown-renderer";
import customMarkdownStyle from "../common/markdownStyle";
import CommentList from "./CommentList";

export default class TopicDetail extends React.Component {
  constructor(props) {
    super(props);
    this.states = {
      topic: props.navigation.getParam("topic")
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderContent()}
        </View>
        {this.renderComment()}
      </ScrollView>
    );
  }

  renderHeader = () => {
    let topic = this.states.topic;
    let { avatar_large, username } = topic.member;
    let { created } = topic;

    let detail =
      moment(created * 1000).format("YYYY-MM-DD HH:mm") +
      " · 评论 " +
      topic.replies +
      " · " +
      topic.node.title;
    return (
      <View style={{ marginVertical: 16 }}>
        <Text style={styles.topicTitle}>{topic.title}</Text>
        <View style={styles.horizontalContainer}>
          <Avatar
            rounded
            source={{ uri: "https:" + avatar_large }}
            avatarStyle={styles.avatarContainerStyle}
          />
          <Text style={styles.authorName}>{username}</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <View style={styles.button}>
              <Icon name="ios-add" type="ionicon" size={24} color="white" />
              <Text style={styles.buttonText}>关注</Text>
            </View>
          </View>
        </View>
        <Text style={styles.detailText}>{detail}</Text>
      </View>
    );
  };
  renderContent = () => {
    let { content } = this.states.topic;
    return (
      <View>
        <Markdown style={customMarkdownStyle}>{content}</Markdown>
      </View>
    );
  };
  renderComment = () => {
    let { id, replies } = this.states.topic;
    return <View style={{ marginTop: 12, backgroundColor: "white" }}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentTitle}>{"评论 (" + replies + ")"}</Text>
        </View>
        <CommentList topic_id={id} />
      </View>;
  };
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingBottom: 16
  },
  horizontalContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  commentHeader: {
    height: 44,
    paddingHorizontal: 25,
    justifyContent: "center",
    borderTopColor: "#D1D1D1",
    borderTopWidth: 0.25,
    borderBottomColor: "#fafafa",
    borderBottomWidth: 2
  },
  avatarContainerStyle: {
    height: 34,
    width: 34
  },
  button: {
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  commentTitle: {
    color: themeColor.secondaryText,
    fontSize: 15,
  },
  buttonText: {
    marginLeft: 8,
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  },
  topicTitle: {
    color: themeColor.primaryText,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 32
  },
  authorName: {
    marginLeft: 20,
    color: themeColor.primaryText,
    fontSize: 18
  },
  detailText: {
    marginTop: 12,
    color: themeColor.secondaryText,
    fontSize: 12
  }
});
