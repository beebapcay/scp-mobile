import React, { ReactNode } from 'react';
import {
  Keyboard, TouchableWithoutFeedback, View, Text,
} from 'react-native';
import styles from './style';

interface Props {
  title: string;
  children: ReactNode;
}
const MainLayout = (props: Props) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.body}>{props.children}</View>
    </View>
  </TouchableWithoutFeedback>
);

export default MainLayout;
