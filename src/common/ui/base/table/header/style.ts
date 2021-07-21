import { StyleSheet } from "react-native";
import { Color } from "../../../../enum/enum";

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.BLUE
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  }
});

export default style;
