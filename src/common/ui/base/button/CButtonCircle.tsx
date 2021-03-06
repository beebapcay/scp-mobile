import React, { FC, ReactNode } from 'react';

import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onPress: () => void;
}

const CButtonCircle: FC<Props> = (props: Props) => (
  <TouchableOpacity
    style={!props.disabled ? styles.circleBtn : styles.circleBtnDisabled}
    disabled={props.disabled}
    onPress={() => props.onPress()}
  >
    {props.children}
  </TouchableOpacity>
);

export default CButtonCircle;
