import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import AppLayout from './layouts/AppLayout';
import SearchResult from './pages/SearchResult';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/search',
        element: <SearchResult />,
      },
      {
        path: '/portfolio/:id',
        element: <Portfolio />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
