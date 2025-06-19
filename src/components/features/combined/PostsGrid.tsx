import { observer } from 'mobx-react-lite';
import { Box, Typography, Grid } from '@mui/material';
import { rootStore } from '../../../state-management/RootStore';
import { PostCard } from './PostCard';
import type { Post } from '../../../services/types';
import { SimplePagination } from '../../layout/SimplePagination';
import { useState, type FC } from 'react';

interface Props {
  itemsPerPageParam: number;
}

const PostsGrid: FC<Props> = observer(({ itemsPerPageParam }) => {
  const { postsStore } = rootStore;
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageParam);

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
        Posts ({postsStore.posts.length})
      </Typography>

      {postsStore.posts.length > 0 && (
        <>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {postsStore
              .getPaginatedPosts(itemsPerPage)
              .map((post: Post) => (
                <Grid
                  key={post.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                  <PostCard post={post} />
                </Grid>
              ))}
          </Grid>
          <SimplePagination
            totalItems={postsStore.posts.length}
            onPageChange={(page) => postsStore.setPostPage(page)}
            onItemsPerPageChange={(count) => setItemsPerPage(count)}
            gridName="posts"
            itemsPerPageParam={itemsPerPage}
            firstPage={postsStore.currentPostPage}
          />
        </>
      )}
    </Box>
  );
});
export default PostsGrid;