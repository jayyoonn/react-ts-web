import About from '../pages/About';
import Home from '../pages/Home';
import NoFound from '../pages/404';

import { RouteObject } from 'react-router-dom';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '*',
    Component: NoFound,
  },
];

export default routeConfig;
