import React from 'react';

import { useSelector } from 'react-redux';

import createRouter from 'routes';
import Navigator from 'routes/navigator';

const App = () => {
  const authenticated = useSelector(state => state.auth.token);
  const Routes = createRouter(!!authenticated);

  return <Routes ref={ref => Navigator.setNavigator(ref)} />;
};

export default App;
