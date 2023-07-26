import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routeConfig from './router';

const router = createBrowserRouter(routeConfig);

const root = createRoot(document.querySelector('#app')!);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
