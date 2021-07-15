import React from "react";
import { TouchableWithoutFeedback, Text } from "react-native";
import styles from "../../base/touchableText/style";

interface Props {
  onTextPress: Function;
  title: string;
}
const LargeText = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.onTextPress()}>
      <Text style={styles.largeText}>{props.title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default LargeText;
