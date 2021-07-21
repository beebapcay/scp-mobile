import React, { FC } from 'react';
import { TouchableWithoutFeedback, View, Image } from 'react-native';
import styles from '../../../../common/ui/layout/auth-layout/authLayoutStyle';
import VIE from '../../../../common/ui/assets/Vie.png';
import ENG from '../../../../common/ui/assets/Eng.png';

interface Props {
  onViePress: () => void;
  onEngPress: () => void;
}
const LanguageSelectContainer: FC<Props> = (props: Props) => (
  <View style={styles.imageContainer}>
    <TouchableWithoutFeedback onPress={() => props.onViePress()}>
      <Image source={VIE} style={{ width: 30, height: 20 }} />
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => props.onEngPress()}>
      <Image source={ENG} style={{ width: 30, height: 20 }} />
    </TouchableWithoutFeedback>
  </View>
);

export default LanguageSelectContainer;
