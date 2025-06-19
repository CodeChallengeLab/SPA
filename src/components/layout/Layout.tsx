import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => (
  <Box sx={{ minHeight: '100vh', width: '100vw', backgroundColor: 'grey.50' }}>
    <Navigation />
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Outlet />
    </Container>
  </Box>

);