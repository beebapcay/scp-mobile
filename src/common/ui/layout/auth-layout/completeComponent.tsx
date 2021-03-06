import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import styles from './resetLayoutStyle';
import SmallText from '../../base/touchableText/smallText';

interface Props {
  completeText: string;
  backText: string;
  onBackPress: () => void;
}
const CompleteComponent: FC<Props> = (props: Props) => (
  <View style={styles.passwordContainer}>
    <AntDesign name="checkcircle" size={100} color="#00C2FF" />
    <Text style={styles.completeText}>{props.completeText}</Text>
    <SmallText onTextPress={props.onBackPress} title={props.backText} />
  </View>
);

export default CompleteComponent;
