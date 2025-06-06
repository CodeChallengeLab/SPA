import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => (
  <Box sx={{ minHeight: '100vh', backgroundColor: 'grey.50' }}>
    <Navigation />
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Outlet />
    </Container>
  </Box>
);