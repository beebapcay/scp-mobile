import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, TouchableWithoutFeedback, View, Text } from 'react-native';
import LanguageSelectContainer from '../../../../app/auth/login/containers/languageSelectContainer';
import styles from './authLayoutStyle';
import { ScopeKey, ScopeValue } from '../../../../models/enum';

interface Props {
  children: ReactNode;
}
const AuthLayout: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>('');

  const getLang = async (): Promise<void> => {
    if (lang === '') {
      const str = await AsyncStorage.getItem(ScopeKey.LANG);
      if (str === null || str === ScopeValue.VIE) setLang(ScopeValue.VIE);
      else setLang(ScopeValue.ENG);
      await AsyncStorage.setItem(ScopeKey.LANG, lang);
      i18next.changeLanguage(lang);
    } else {
      await AsyncStorage.setItem(ScopeKey.LANG, lang);
      i18next.changeLanguage(lang);
    }
  };

  useEffect(() => {
    getLang();
  }, [lang]);

  const handleVieSelect = (): void => {
    setLang(ScopeValue.VIE);
  };

  const handleEngSelect = (): void => {
    setLang(ScopeValue.ENG);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topBox}>
          <Text style={styles.title}>{t('title.login')}</Text>
        </View>
        <View style={styles.body}>{props.children}</View>
        <View style={styles.bottomBox} />
        <LanguageSelectContainer
          onViePress={handleVieSelect}
          onEngPress={handleEngSelect}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthLayout;
