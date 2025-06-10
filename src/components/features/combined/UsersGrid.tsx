import { observer } from 'mobx-react-lite';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { rootStore } from '../../../state-management/RootStore';
import { UserCard } from './UserCard';
import type { User } from '../../../services/types';

const UsersGrid = observer(() => {
  const { postsUsersStore } = rootStore;

  return (
    <Box>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        Users ({postsUsersStore.users.length})
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {postsUsersStore.users.map((user: User) => (
          <Grid
            key={user.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          >
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default UsersGrid;