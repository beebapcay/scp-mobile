import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useEffect, useState } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-native';
import { ScopeKey, ScopeValue, ScreenURL } from '../models/enum';

interface Props extends RouteProps {
  path: ScreenURL;
}

const PrivateRoute: FC<Props> = (props: Props) => {
  const { component, path, exact } = props;
  const [isAuthenticated, setAuthenticated] = useState<ScopeValue>(ScopeValue.FALSE);

  useEffect(() => {
    AsyncStorage.getItem(ScopeKey.IS_AUTHENTICATED)
      .then((status: string | null) => {
        if (status) { setAuthenticated(status as ScopeValue); }
      });
  }, []);

  return isAuthenticated === ScopeValue.TRUE ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to={`${ScreenURL.LOGIN}?next=${props.location?.pathname}`} />
  );
};

export default PrivateRoute;
