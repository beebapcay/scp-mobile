import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

interface Props {
  value?: string;
}

const CError: FC<Props> = (props: Props) => (
  <View style={styles.errorView}>
    <Text style={styles.errorText}>{props.value}</Text>
  </View>
);

export default CError;
