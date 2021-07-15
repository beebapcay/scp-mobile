import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

interface Props {
  onBtnPress: Function;
  title: string;
}
const LargeBtn = (props: Props) => {
  return (
    <TouchableOpacity
      style={styles.largeBtn}
      activeOpacity={0.6}
      onPress={() => props.onBtnPress()}
    >
      <Text style={styles.textBtn}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default LargeBtn;
