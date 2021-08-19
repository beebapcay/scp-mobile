import { StyleSheet } from "react-native";
import { Color } from "../../../enum/enum";

const style = StyleSheet.create({
  container: {
    minHeight: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: Color.BLUE,
  },
});

export default style;
