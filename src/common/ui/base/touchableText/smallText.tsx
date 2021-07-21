import React, { FC } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import styles from '../../base/touchableText/style';

interface Props {
  onTextPress: () => void;
  title: string;
}
const SmallText: FC<Props> = (props: Props) => (
  <TouchableWithoutFeedback onPress={() => props.onTextPress()}>
    <Text style={styles.smallText}>{props.title}</Text>
  </TouchableWithoutFeedback>
);

export default SmallText;
