import React from "react";
import { TextInput, View } from "react-native";
import styles from "./style-card-view";
import { Entypo } from "react-native-vector-icons";

interface Props {
  placeholder: string;
  icon: string;
  onTextChange: Function;
  secure: boolean;
}

const EmailTextInput = (props: Props) => {
  return (
    <View style={styles.inputFieldContainer}>
      <View style={styles.iconContainer}>
        <Entypo name={props.icon} size={16} color="#888888" />
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

export default EmailTextInput;
