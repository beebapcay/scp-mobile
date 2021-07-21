import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

interface Props {
  onBtnPress: () => void;
  title: string;
}
const SmallBtn: FC<Props> = (props: Props) => (
  <TouchableOpacity
    style={styles.smallBtn}
    activeOpacity={0.6}
    onPress={() => props.onBtnPress()}
  >
    <Text style={styles.textBtn}>{props.title}</Text>
  </TouchableOpacity>
);

export default SmallBtn;
