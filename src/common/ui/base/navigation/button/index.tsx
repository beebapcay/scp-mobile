import React, { FC } from 'react';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from 'react-router-native';

export interface NavButtonProps {
  iconName: string;
  size?: number;
  iconColor?: string;
  to: string;
  onPressed?: () => void;
}

const NavButton: FC<NavButtonProps> = (props: NavButtonProps) => {
  // Props
  const {
    iconName: name,
    size = 28,
    iconColor = 'white',
    to,
    onPressed
  } = props;

  // Component
  return (
    <Link style={style.container} to={to} onPress={onPressed} underlayColor="#00000055">
      <Icon style={style.icon} name={name} size={size} color={iconColor} />
    </Link>
  );
}

export default NavButton
