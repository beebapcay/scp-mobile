import React from "react";
import { TextInput, View } from "react-native";
import styles from "./style-login";
import { Ionicons } from "react-native-vector-icons";

interface Props {
  placeholder: string;
  icon: string;
  onTextChange: Function;
  secure: boolean;
}
const NormalTextInput = (props: Props) => {
  return (
    <View style={styles.inputFieldContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name={props.icon} size={16} color="#888888" />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          placeholderTextColor="#DDDDDD"
          secureTextEntry={props.secure}
          onChangeText={(text) => props.onTextChange(text)}
        />
      </View>
    </View>
  );
};

export default NormalTextInput;
