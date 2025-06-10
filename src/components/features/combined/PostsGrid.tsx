import { observer } from 'mobx-react-lite';
import { Box, Typography, Grid } from '@mui/material';
import { rootStore } from '../../../state-management/RootStore';
import { PostCard } from './PostCard';
import type { Post } from '../../../services/types';

const PostsGrid = observer(() => {
  const { postsUsersStore } = rootStore;

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
        Posts ({postsUsersStore.posts.length})
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ mb: 4 }}
      >
        {postsUsersStore.posts.map((post: Post) => (
          <Grid
            key={post.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default PostsGrid;