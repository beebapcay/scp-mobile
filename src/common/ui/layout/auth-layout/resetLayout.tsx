import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Keyboard, TouchableWithoutFeedback, View, Text,
} from 'react-native';
import styles from './resetLayoutStyle';

interface Props {
  titleKey: string;
  children: ReactNode;
}

const ResetLayout: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Text style={styles.title}>{t(props.titleKey)}</Text>
          {props.children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetLayout;
