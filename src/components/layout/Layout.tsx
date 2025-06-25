import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => (
  <Stack
    sx={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: 'grey.50'
    }}
  >
    <Navigation />
    <Stack sx={{
      py: 4,
      px: 3,
      flex: 1,
      overflow: 'auto'
    }}>
      <Outlet />
    </Stack>
  </Stack>
);
