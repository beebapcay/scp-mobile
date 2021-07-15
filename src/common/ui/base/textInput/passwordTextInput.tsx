import React from "react";
import { TextInput, TouchableWithoutFeedback, View } from "react-native";
import styles from "./style-login";
import { Entypo } from "react-native-vector-icons";

interface Props {
  placeholder: string;
  icon: string;
  onTextChange: Function;
  secure: boolean;
  onVisibleChange: Function;
}
const PasswordTextInput = (props: Props) => {
  return (
    <View style={styles.inputFieldContainer}>
      <View style={styles.iconContainer}>
        <Entypo name={props.icon} size={16} color="#888888" />
      </View>
      <View style={styles.passInputContainer}>
        <TextInput
          style={styles.passInput}
          placeholder={props.placeholder}
          placeholderTextColor="#DDDDDD"
          secureTextEntry={props.secure}
          onChangeText={(text) => props.onTextChange(text)}
        />
        <TouchableWithoutFeedback onPress={() => props.onVisibleChange()}>
          <Entypo
            name={!props.secure ? "eye-with-line" : "eye"}
            size={20}
            style={{ marginHorizontal: 5 }}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default PasswordTextInput;
