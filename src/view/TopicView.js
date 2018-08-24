import React from "react";
import { View } from "react-native"
import TopicList from './TopicList'
import { themeColor } from '../common/colors'
import propTypes from "prop-types"

export default class TopicView extends React.Component {
  static propTypes = {
    type: propTypes.string.isRequired
  }
  render() {
    return (
      <View style={{backgroundColor: themeColor.backgroundColor}}>
        <TopicList topicType={this.props.type}/>
      </View>
    )
  }
}
