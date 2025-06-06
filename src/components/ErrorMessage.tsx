import { Alert, AlertTitle } from '@mui/material';

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <Alert severity="error" sx={{ my: 2 }}>
    <AlertTitle>Error</AlertTitle>
    {error}
  </Alert>
);