import React, { FC } from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import styles from './authLayoutStyle';

interface Props {
  placeholder: string;
  icon: string;
  onTextChange: (passwordChange: string) => void;
  secure: boolean;
  onVisibleChange: () => void;
}
const PasswordTextInput: FC<Props> = (props: Props) => (
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
          name={!props.secure ? 'eye-with-line' : 'eye'}
          size={20}
          style={{ marginHorizontal: 5 }}
        />
      </TouchableWithoutFeedback>
    </View>
  </View>
);

export default PasswordTextInput;
