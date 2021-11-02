import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
