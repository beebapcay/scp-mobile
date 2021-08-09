import React, { FC, ReactNode } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useHistory } from "react-router-native";
import style from './style';

interface Props {
  title: string;
  canGoBack?: boolean;
  children?: ReactNode;
}

const AppBar: FC<Props> = (props: Props) => {
  // Props
  const { title, canGoBack, children } = props
  const history = useHistory();

  // Events
  function goBack() {
    history.goBack();
  }

  // Component
  return (
    <View style={style.container}>

      {(canGoBack ?? false) &&
        <TouchableOpacity style={style.backButton} onPress={goBack}>
          <Image style={style.backImage} source={require('../../../../../assets/icons/back.png')} />
        </TouchableOpacity>
      }

      <Text style={style.title}>{title}</Text>

      {children}

    </View>
  );
}

export default AppBar;
