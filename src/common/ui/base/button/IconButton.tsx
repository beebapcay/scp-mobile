import React, { FC } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  title: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  backgroundColor?: string;
  color?: string;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const IconButton: FC<Props> = (props) => {
  const {
    iconName,
    title,
    backgroundColor = '#000',
    color = '#FFF',
    disable,
    style,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={[
        disable ? styles.disableBtn : styles.normalBtn,
        { backgroundColor: backgroundColor },
        style,
      ]}
      disabled={disable}
      activeOpacity={0.75}
      onPress={onPress}
    >
      <>
        <MaterialCommunityIcons
          name={iconName}
          style={styles.iconBtn}
          color={color}
        />
        <Text style={[styles.titleBtn, { color: color }]}>{title}</Text>
      </>
    </TouchableOpacity>
  );
};

export default IconButton;
