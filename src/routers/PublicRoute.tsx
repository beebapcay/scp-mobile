import React, { FC } from 'react';
import { RouteProps, Route } from 'react-router-native';
import { ScreenURL } from '../models/enum';
import MainRoute from './main';

interface Props extends RouteProps {
  path: ScreenURL;
}

const PublicRoute: FC<Props> = (props: Props) => {
  const { path, component, exact } = props;
  return <Route path={path} component={component} exact={exact} />;
};

export default PublicRoute;
export { MainRoute }
