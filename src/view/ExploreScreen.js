import React from "react";
import { View, Text, SectionList } from "react-native";
import { fetchNodes } from "../utils/api";
import { List, ListItem } from 'react-native-elements'
import { groupBy } from '../utils/arrayUtil'

export default class ExploreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };
  }

  componentDidMount() {
    fetchNodes(result => {
      this.setState({ nodes: result });
    });
  }

  render() {
    let sections = groupBy(this.state.nodes)
    console.log(sections)
    return (
      <View />
    );
  }
}
/*
<SectionList
  renderItem={({ item, index, section }) => (
    <ListItem title={item.title}/>
  )}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={{ fontWeight: "bold" }}>{title}</Text>
  )}
  sections={sections}
  keyExtractor={(item, index) => item + index}
/>
*/