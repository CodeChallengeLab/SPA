import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { CounterPage } from '../pages/CounterPage';
import { AlbumsPage } from '../pages/AlbumsPage';
import { PostsUsersPage } from '../pages/PostsUsersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
    ],
  },
]);
