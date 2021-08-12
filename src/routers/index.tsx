import React, { FC } from 'react';
import { NativeRouter, Switch } from 'react-router-native';
import Login from '../app/auth/login';
import { ScreenURL } from '../models/enum';
import PublicRoute from './PublicRoute';
import ForgotPassword from '../app/auth/forgot-pass';
import ResetPassword from '../app/auth/reset-pass';
import Dashboard from '../app/dashboard';
import ChangePassword from '../app/auth/change-pass';
import Profile from '../app/profile';
import PersonDashboard from '../app/dashboard/person-dashboard';
import Main from '../app/main';
import Notification from '../app/notification';

interface Props { }

const Routers: FC<Props> = (props: Props) => (
  <NativeRouter>
    <Switch>
      <PublicRoute
        exact
        path={ScreenURL.HOME}
        component={Login}
      />
      <PublicRoute
        path={ScreenURL.MAIN}
        component={Main}
      />
      <PublicRoute
        path={ScreenURL.DASHBOARD}
        component={Dashboard}
      />
      <PublicRoute
        path={ScreenURL.NOTIFICATION}
        component={Notification}
      />
      <PublicRoute
        exact
        path={ScreenURL.PERSON_DASHBOARD}
        component={PersonDashboard}
      />
      <PublicRoute
        exact
        path={ScreenURL.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <PublicRoute
        exact
        path={ScreenURL.PROFILE}
        component={Profile} />
      <PublicRoute
        exact
        path={ScreenURL.RESET_PASSWORD}
        component={ResetPassword}
      />
      <PublicRoute
        exact
        path={ScreenURL.CHANGE_PASSWORD}
        component={ChangePassword}
      />
    </Switch>
  </NativeRouter>
);

export default Routers;
