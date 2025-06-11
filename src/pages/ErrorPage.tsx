import { Box, Typography, Button } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, textAlign: 'center' }}>
      <Typography variant="h4" color="error" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1">An unexpected error occurred. Please try again later.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => window.location.href = '/'}>
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;