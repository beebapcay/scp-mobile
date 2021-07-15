import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { AntDesign } from "react-native-vector-icons";
import SmallText from "../../base/touchableText/smallText";

interface Props {
  completeText: string;
  backText: string;
  onBackPress: Function;
}
const ResetComplete = (props: Props) => {
  return (
    <View style={styles.passwordContainer}>
      <AntDesign name="checkcircle" size={100} color="#00C2FF" />
      <Text style={styles.completeText}>{props.completeText}</Text>
      <SmallText onTextPress={props.onBackPress} title={props.backText} />
    </View>
  );
};

export default ResetComplete;
