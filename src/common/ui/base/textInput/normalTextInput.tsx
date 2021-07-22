import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from './authLayoutStyle';

interface Props {
  placeholder: string;
  icon: string;
  onTextChange: (textChange: string) => void;
  secure: boolean;
}
const NormalTextInput: FC<Props> = (props: Props) => (
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

export default NormalTextInput;
