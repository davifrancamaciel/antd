import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps
} from 'react-router-dom';

import DefaultLayout from '../pages/_layout';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWhapper: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={props => (
        <DefaultLayout {...rest}>
          <Component {...props} {...rest} />
        </DefaultLayout>
      )}
    />
  );
};

export default RouteWhapper;
