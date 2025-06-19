import { observer } from 'mobx-react-lite';
import { Typography, Grid, Divider, Stack } from '@mui/material';
import { rootStore } from '../../../state-management/RootStore';
import { UserCard } from './UserCard';
import type { User } from '../../../services/types';
import { useState, type FC } from 'react';
import { SimplePagination } from '../../layout/SimplePagination';

interface Props {
  itemsPerPageParam: number;
}

const UsersGrid: FC<Props> = observer(({ itemsPerPageParam }) => {
  const { usersStore } = rootStore;
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageParam);

  return (
    <Stack spacing={3} sx={{ py: 2 }}>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        Users ({usersStore.users.length})
      </Typography>

      {usersStore.users.length > 0 && (
        <>
          <Grid container spacing={3} >
            {usersStore
              .getPaginatedUsers(itemsPerPage)
              .map((user: User) => (
                <Grid
                  key={user.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                  <UserCard user={user} />
                </Grid>
              ))}
          </Grid>
          <SimplePagination
            totalItems={usersStore.users.length}
            onPageChange={(page) => usersStore.setUserPage(page)}
            onItemsPerPageChange={(count) => setItemsPerPage(count)}
            gridName="users"
            itemsPerPageParam={itemsPerPage}
            firstPage={usersStore.currentUserPage}
          />
        </>
      )}
    </Stack>
  );
});

export default UsersGrid;