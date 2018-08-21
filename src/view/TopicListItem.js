import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import propTypes from "prop-types";
import { themeColor } from "../common/colors";
import moment from "moment";
import { withNavigation } from "react-navigation";

class TopicListItem extends React.PureComponent {
  static propTypes = {
    item: propTypes.object.isRequired
  };
  render() {
    return (
      <TouchableHighlight
        onPress={this.toDetail}
        underlayColor={themeColor.underlayColor}
        style={{ marginBottom: 6 }}
      >
        <View style={styles.container}>
          {this.renderTop()}
          {this.renderContent()}
          {this.renderBottom()}
        </View>
      </TouchableHighlight>
    );
  }

  toDetail = () => {
    this.props.navigation.navigate("Topic", { topic: this.props.item });
  };

  renderTop = () => {
    let item = this.props.item;
    let { avatar_large, username } = item.member;
    let { created } = item;
    let passedTime = moment(created * 1000)
      .startOf("minutes")
      .fromNow();
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
    let summary = content.substr(0, 30).replace(/[\n\r*#]/g, "") + "…";
    return (
      <View style={{ marginTop: 12 }}>
        <Text style={styles.topicTitle}>{title}</Text>
        <Text style={styles.topicSummary}>{summary}</Text>
      </View>
    );
  };

  renderBottom = () => {
    let { title } = this.props.item.node;
    let { replies } = this.props.item;
    let iconProp = {
      name: "message",
      type: "entypo",
      size: 16,
      color: "#dadada",
      containerStyle: { marginRight: 4 }
    };
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.nodeContainer}>
          <Text style={styles.nodeTitle}>{title}</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Icon {...iconProp} />
          <Text style={styles.subtitle}>{replies}</Text>
        </View>
      </View>
    );
  };
}

export default withNavigation(TopicListItem);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "white"
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  horizontalContainer: {
    flexDirection: "row"
  },
  avatarContainerStyle: {
    height: 37,
    width: 37
  },
  nodeContainer: {
    borderRadius: 2,
    paddingHorizontal: 10,
    height: 20,
    backgroundColor: "#EAEAEA",
    alignItems: "center",
    justifyContent: "center"
  },
  nodeTitle: {
    color: themeColor.secondaryText,
    fontSize: 11
  },
  title: {
    color: themeColor.primaryText,
    fontSize: 14,
  },
  subtitle: {
    marginTop: 2,
    color: themeColor.secondaryText,
    fontSize: 12
  },
  topicTitle: {
    color: themeColor.primaryText,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
    textAlign: "left"
  
  },
  topicSummary: {
    marginTop: 8,
    color: themeColor.secondaryText,
    fontSize: 14,
  }
});
