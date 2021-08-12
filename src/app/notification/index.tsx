import React, { FC } from 'react';
import { View, Text } from 'react-native';
import AppBar from '../../common/ui/base/app-bar';
import style from './style';

interface Props { }

const Notification: FC<Props> = (props: Props) => {
  // Component
  return (
    <View style={style.container}>

      <AppBar title='Notification' />
      <Text style={style.text}>Empty</Text>

    </View>
  );
};

export default Notification;
