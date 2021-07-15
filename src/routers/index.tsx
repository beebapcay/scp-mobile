import React, { FC } from "react";
import { NativeRouter, Switch } from "react-router-native";
import Login from "../app/auth/login";
import { ScreenURL } from "../models/enum";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "../app/auth/forgot-pass";
import ResetPassword from "../app/auth/reset-pass";
import ChangePassword from "../app/auth/change-pass";
import Dashboard from "../common/ui/layout/dashboard-layout";

interface Props {}

const Routers: FC<Props> = (props: Props) => {
  return (
    <NativeRouter>
      <Switch>
        <PublicRoute exact path={ScreenURL.HOME} component={Dashboard} />
        {/* <PublicRoute exact path={ScreenURL.HOME} component={Login} /> */}
        {/* <PublicRoute exact path={ScreenURL.LOGIN} component={Login} /> */}
        {/* <PublicRoute
          exact
          path={ScreenURL.FORGOT_PASSWORD}
          component={ForgotPassword}
        /> */}
        {/* <PublicRoute exact path={ScreenURL.HOME} component={ResetPassword} /> */}
        {/* <PublicRoute exact path={ScreenURL.HOME} component={ChangePassword} /> */}
      </Switch>
    </NativeRouter>
  );
};

export default Routers;
