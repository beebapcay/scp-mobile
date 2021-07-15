import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ScreenURL } from '../../models/enum';
import styles from './style';

interface Props { };

const Dashboard=(props) => {
  props.history.push(ScreenURL.LOGIN)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Dashboard;
