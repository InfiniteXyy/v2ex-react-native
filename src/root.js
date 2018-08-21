import React from "react";
import App from "./view/App";
import momentLocale from "moment/locale/zh-cn";
import moment from "moment";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    moment.updateLocale("zh-cn", momentLocale);
  }

  render() {
    return <App />;
  }
}
