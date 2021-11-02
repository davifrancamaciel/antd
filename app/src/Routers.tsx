import React from 'react';

import { Route, Switch ,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';

const Routers: React.FC = () => (
  <BrowserRouter>
    <Route component={Home} path='/' exact />
  </BrowserRouter>
);

export default Routers;
