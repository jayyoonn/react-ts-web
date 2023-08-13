import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routeConfig from './router';
import './assets/scss/app.scss';
import './assets/scss/reset.scss';
import Loading from '@/components/Loading';

const router = createBrowserRouter(routeConfig);

const root = createRoot(document.querySelector('#app')!);
root.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
