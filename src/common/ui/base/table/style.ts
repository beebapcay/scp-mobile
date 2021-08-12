import { StyleSheet } from "react-native";
import { Color } from "../../../enum/enum";

const style = StyleSheet.create({
  flatlist: {
    flex: 1
  },
  rowOdd: {
    backgroundColor: Color.WHITE,
  },
  rowEven: {
    backgroundColor: Color.LIGHT_GRAY
  },
  loading: {
    margin: 8
  }
});

export default style;
