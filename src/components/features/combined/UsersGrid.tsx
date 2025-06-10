import { observer } from 'mobx-react-lite';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { rootStore } from '../../../state-management/RootStore';
import { UserCard } from './UserCard';
import type { User } from '../../../services/types';
import { useState, type FC } from 'react';
import { SimplePagination } from '../../layout/SimplePagination';
import { PostCard } from './PostCard';
interface Props {
    itemsPerPageParam: number;
    }
const UsersGrid: FC<Props> = observer(({itemsPerPageParam}) => {
  const { postsUsersStore } = rootStore;
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageParam);
    

  return (
    <Box>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        Users ({postsUsersStore.users.length})
      </Typography>
     
      {postsUsersStore.users.length > 0 && (
              <>
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {postsUsersStore.users.slice(startIndex, startIndex + itemsPerPage).map((user: User) => (
                    <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                      <UserCard user={user} />
                    </Grid>
                  ))}
                </Grid>
                <SimplePagination
                  totalItems={postsUsersStore.users.length}
                  onPageChange={(index) => { setStartIndex(index) }}
                  onItemsPerPageChange={(count) => { setItemsPerPage(count) }}
                  gridName="users"
                  itemsPerPageParam={itemsPerPage}
                />
              </>
      
            )}
    </Box>
  );
});

export default UsersGrid;