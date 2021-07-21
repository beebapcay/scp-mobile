import React, { FC } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import styles from '../../base/touchableText/style';

interface Props {
  onTextPress: () => void;
  title: string;
}
const LargeText: FC<Props> = (props: Props) => (
  <TouchableWithoutFeedback onPress={() => props.onTextPress()}>
    <Text style={styles.largeText}>{props.title}</Text>
  </TouchableWithoutFeedback>
);

export default LargeText;
