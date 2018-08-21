import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import propTypes from "prop-types";
import { themeColor } from "../common/colors";
import moment from "moment"

export default class TopicListItem extends React.PureComponent {
  static propTypes = {
    item: propTypes.object.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderTop()}
        {this.renderContent()}
      </View>
    );
  }

  renderTop = () => {
    let { avatar_large, username } = this.props.item.member;
    let { created } = this.props.item;
    let passedTime = moment(created * 1000).startOf("hour").fromNow()
    return (
      <View style={styles.horizontalContainer}>
        <Avatar
          rounded
          source={{ uri: "https:" + avatar_large }}
          avatarStyle={styles.avatarContainerStyle}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>{username + " 发表了话题"}</Text>
          <Text style={styles.subtitle}>{passedTime}</Text>
        </View>
      </View>
    );
  };

  renderContent = () => {
    let { title, content } = this.props.item;
    let summary = content.substr(0, 30) + " ...";
    return (
      <View style={{ marginTop: 12 }}>
        <Text style={styles.topicTitle}>{title}</Text>
        <Text style={styles.topicSummary}>{summary}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "white"
  },
  horizontalContainer: {
    flexDirection: "row"
  },
  avatarContainerStyle: {
    height: 37,
    width: 37
  },
  title: {
    color: themeColor.primaryText,
    fontSize: 14
  },
  subtitle: {
    marginTop: 2,
    color: themeColor.secondaryText,
    fontSize: 12
  },
  topicTitle: {
    color: themeColor.primaryText,
    fontSize: 16
  },
  topicSummary: {
    marginTop: 8,
    color: themeColor.secondaryText,
    fontSize: 14
  }
});
