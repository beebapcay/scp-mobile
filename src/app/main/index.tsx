import React, { FC } from 'react';
import { View } from 'react-native';
import { Link, NativeRouter, Redirect, Route, Switch, useHistory } from 'react-router-native';
import NavigationTab, { NavButton } from '../../common/ui/base/navigation';
import { ScreenURL } from '../../models/enum';
import PublicRoute from '../../routers';
import MainRoute from '../../routers/main';
import Dashboard from '../dashboard';
import Notification from '../notification';
import Profile from '../profile';
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

        <NavigationTab>
          <NavButton iconName='home' to={ScreenURL.DASHBOARD} />
          <NavButton iconName='account' to={ScreenURL.PROFILE} />
          <NavButton iconName='bell' size={24} to={ScreenURL.NOTIFICATION} />
        </NavigationTab>

      </View >
    );
};

export default Main;
