import { Box, CircularProgress, Typography, Stack } from '@mui/material';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
  size = 40,
  fullScreen = false
}) => {
  const containerProps = fullScreen
    ? {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 9999
    }
    : {
      py: 8
    };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...containerProps}
    >
      <Stack spacing={2} alignItems="center">
        <CircularProgress size={size} />
        {message && (
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default LoadingSpinner;