import { themeColor } from "./colors";
import { StyleSheet } from "react-native"

const customMarkdownStyle = StyleSheet.create({
  view: {},
  heading: {
    marginVertical: 8,
  },
  codeBlock: {
    fontFamily: "Courier",
    fontWeight: "400",
    color: themeColor.primaryText,
    backgroundColor: "#f8f8f8",
    fontSize: 14.7,
    borderRadius: 8,
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
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
    fontWeight: "600",
    color: "#42b983"
  },

});

export default customMarkdownStyle;
