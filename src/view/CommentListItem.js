import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import propTypes from "prop-types";
import moment from "moment";
import { themeColor } from "../common/colors";

export default class CommentListItem extends React.Component {
  static propTypes = {
    commentItem: propTypes.object.isRequired,
    index: propTypes.number.isRequired
  };
  render() {
    let commentItem = this.props.commentItem;
    let { avatar_large, username } = commentItem.member;
    let { thanks } = commentItem;
    let floor = this.props.index + 1;
    let timeAndFloor =
      floor + "楼 · " + moment(commentItem.created * 1000).format("M.DD HH:mm");
    return (
      <View style={styles.container}>
        <View style={styles.horizontalContainer}>
          <Avatar source={{ uri: "https:" + avatar_large }} rounded />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 14, color: themeColor.primaryText }}>
              {username}
            </Text>
            <Text style={styles.timeAndFloor}>{timeAndFloor}</Text>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={{color: themeColor.secondaryText}}>{"0 次感谢"}</Text>
          </View>
        </View>
        <Text style={styles.commentBody}>{commentItem.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 0.25
  },
  horizontalContainer: {
    flexDirection: "row"
  },
  commentBody: {
    marginTop: 8,
    fontSize: 16,
    color: themeColor.primaryText,
    lineHeight: 28
  },
  timeAndFloor: {
    marginTop: 3,
    fontSize: 12,
    color: themeColor.secondaryText
  }
});
