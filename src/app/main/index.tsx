import React, { FC } from 'react';
import { View } from 'react-native';
import { Redirect, useHistory } from 'react-router-native';
import BottomNavigation from '../../common/ui/layout/bottom-navigation';
import { ScreenURL } from '../../models/enum';
import MainRoute from '../../routers/main';
import style from './style';

interface Props { }

const Main: FC<Props> = (props: Props) => {
  // Props
  const history = useHistory();

  // Component
  return history.location.pathname === ScreenURL.MAIN
    ? (<Redirect to={ScreenURL.DASHBOARD} />)
    : (
      <View style={style.container}>

        <MainRoute />
        <BottomNavigation/>

      </View >
    );
};

export default Main;
