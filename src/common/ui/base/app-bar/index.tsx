import React, { FC, ReactNode } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { useHistory } from "react-router-native";
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
  title: string;
  canGoBack?: boolean;
  children?: ReactNode;
}

const AppBar: FC<Props> = (props: Props) => {
  // Props
  const { title, canGoBack = false, children } = props
  const history = useHistory();

  // Events
  function goBack(): void {
    history.goBack();
  }

  // Component
  return (
    <View style={style.container}>

      {canGoBack &&
        <TouchableOpacity style={style.backButton} onPress={goBack}>
          <Icon name='arrow-left' size={24} color='white'/>
        </TouchableOpacity>
      }

      <Text style={style.title}>{title}</Text>

      {children}

    </View>
  );
}

export default AppBar;
