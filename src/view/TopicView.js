import React from "react";
import { View } from "react-native"
import TopicList from './TopicList'
import { themeColor } from '../common/colors'

export default class TopicView extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: themeColor.backgroundColor}}>
        <TopicList topicType={"hot"}/>
      </View>
    )
  }
}
