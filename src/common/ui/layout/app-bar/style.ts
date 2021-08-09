import { StyleSheet } from "react-native";
import { Color } from "../../../enum/enum";

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.BLUE,
  },
  backButton: {
    marginLeft: 8
  },
  backImage: {
    width: 24,
    height: 24
  },
  title: {
    flex: 1,
    margin: 8,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default style;
