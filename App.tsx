import React, { FC } from 'react';
import { Provider } from "react-redux";
import { store } from './src/models/store';
import Routers from "./src/routers";
import './src/common/util/i18n/config'

interface Props { };

const App: FC<Props> = (props: Props) => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
