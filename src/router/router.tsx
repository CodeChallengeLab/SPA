import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { CounterPage } from '../pages/CounterPage';
import { AlbumsPage } from '../pages/AlbumsPage';
import { PostsUsersPage } from '../pages/PostsUsersPage';
import ErrorPage from '../pages/ErrorPage';
import ErrorBoundary from '../components/error/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <CounterPage />,
      },
      {
        path: 'albums',
        element: <AlbumsPage />,
      },
      {
        path: 'posts-users',
        element: <PostsUsersPage />,
      },

      { path: '/error', element: <ErrorPage /> },
      { path: '*', element: <ErrorPage /> },

    ],
  },
]);
