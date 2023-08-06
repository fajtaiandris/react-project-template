import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { I18nProvider } from '@i18n/I18nProvider';

import './index.css';
import { ErrorPage } from './pages/Error';
import { PrivateOutlet } from './pages/PrivateOutlet';
import { Root } from './pages/Root';

async function prepare() {
  if (import.meta.env.DEV) {
    import('./mocks/browser').then(({ worker }) => {
      worker.start();
    });
  }
}

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/some-public-route',
    element: <>See, works!</>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/some-private-route',
    element: <PrivateOutlet />,
    children: [
      {
        path: '',
        element: <>This page is private</>,
      },
    ],
  },
]);

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <I18nProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </I18nProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
