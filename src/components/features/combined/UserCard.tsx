import { Typography, Chip, Box } from '@mui/material';
import type { User } from '../../../services/types';
import { AppCard } from '../../AppCard';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => (
  <AppCard>
    <Typography variant="h6" component="h3" gutterBottom>
      {user.name}
    </Typography>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      @{user.username}
    </Typography>
    <Typography variant="body2" gutterBottom>
      {user.email}
    </Typography>
    <Typography variant="body2" gutterBottom>
      {user.address.city}, {user.address.street}
    </Typography>
    <Box mt={2}>
      <Chip
        label={user.company.name}
        size="small"
        variant="outlined"
      />
    </Box>
  </AppCard>
);