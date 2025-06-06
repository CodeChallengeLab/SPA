import { Card, CardContent, CardActions } from '@mui/material';
import { type ReactNode } from 'react';

interface AppCardProps {
  children: ReactNode;
  actions?: ReactNode;
}

export const AppCard = ({ children, actions }: AppCardProps) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      {children}
    </CardContent>
    {actions && <CardActions>{actions}</CardActions>}
  </Card>
);