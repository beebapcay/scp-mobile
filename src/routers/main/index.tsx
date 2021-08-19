import React from "react";
import { Switch } from "react-router-native";
import Dashboard from "../../app/dashboard";
import Notification from "../../app/notification";
import Profile from "../../app/profile";
import { ScreenURL } from "../../models/enum";
import PublicRoute from "../PublicRoute";

interface Props { }

const MainRoute = (props: Props) => {
  return (
    <Switch>
      <PublicRoute path={ScreenURL.DASHBOARD} component={Dashboard} />
      <PublicRoute path={ScreenURL.PROFILE} component={Profile} />
      <PublicRoute path={ScreenURL.NOTIFICATION} component={Notification} />
    </Switch>
  );
}

export default MainRoute;
