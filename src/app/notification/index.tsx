import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import AppBar from '../../common/ui/base/app-bar';
import style from './style';

interface Props { }

const Notification: FC<Props> = (props: Props) => {
  // Props
  const { t } = useTranslation();

  // Component
  return (
    <View style={style.container}>

      <AppBar title={t('title.notification')} />
      <Text style={style.text}>Empty</Text>

    </View>
  );
};

export default Notification;
