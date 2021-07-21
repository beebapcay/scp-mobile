import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import styles from './resetLayoutStyle';

interface Props {
  placeholder: string;
  icon: string;
  onTextChange: (emailChange: string) => void;
  secure: boolean;
}

const EmailTextInput: FC<Props> = (props: Props) => (
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

export default EmailTextInput;
