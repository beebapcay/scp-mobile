import React, { FC } from 'react';
import { View, Text } from 'react-native';
import style from './style';

interface Props { }

const User: FC<Props> = (props: Props) => {
  // Component
  return (
    <View style={style.container}>
      <Text>Notification</Text>
    </View>
  );
};

export default User;
