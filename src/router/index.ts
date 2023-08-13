import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('../layouts/basicLayout')),
    children: [
      {
        path: '/',
        Component: lazy(() => import('../pages/home')),
      },
      {
        path: '/about',
        Component: lazy(() => import('../pages/about')),
      },
    ],
  },
  {
    path: '*',
    Component: lazy(() => import('../pages/notFound')),
  },
];

export default routeConfig;
