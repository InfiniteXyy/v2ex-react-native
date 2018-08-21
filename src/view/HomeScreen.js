import React from "react";
import { View } from "react-native"
import Toolbar from '../components/Toolbar'
import TopicList from './TopicList'
import { themeColor } from '../common/colors'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: themeColor.backgroundColor}}>
        <Toolbar title={"V2EX"}/>
        <TopicList/>
      </View>
    )
  }
}

