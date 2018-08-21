import { themeColor } from "./colors";
import { StyleSheet } from "react-native"

const customMarkdownStyle = StyleSheet.create({
  view: {},
  heading: {
    marginVertical: 8,
  },
  codeBlock: {
    fontFamily: "Courier",
    fontWeight: "400"
  },
  del: {
    backgroundColor: themeColor.primaryText
  },
  em: {
    fontStyle: "italic"
  },

  text: {
    color: themeColor.primaryText,
    fontSize: 16,
    lineHeight: 28
  },
  a: {
    textDecorationLine: "underline",
    color: "#FF0000"
  },
  u: {
    borderColor: "#000000",
    borderBottomWidth: 1
  }
});

export default customMarkdownStyle;
