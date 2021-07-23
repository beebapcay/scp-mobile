import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.cardView}>
          <Text style={styles.title}>{t(props.titleKey)}</Text>
          {props.children}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ResetLayout;
