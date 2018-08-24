import React from "react";
import momentLocale from "moment/locale/zh-cn";
import moment from "moment";
import { YellowBox } from "react-native";
import Root from "./src/root";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    moment.updateLocale("zh-cn", momentLocale);
    YellowBox.ignoreWarnings(["Task orphaned"]);
  }

  render() {
    return <Root />;
  }
}
