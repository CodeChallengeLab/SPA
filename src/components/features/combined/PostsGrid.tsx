import { observer } from 'mobx-react-lite';
import { Typography, Grid, Stack } from '@mui/material';
import { rootStore } from '../../../state-management/RootStore';
import { PostCard } from './PostCard';
import { PostCardSkeleton } from './PostCardSkeleton';
import { ErrorMessage } from '../../ErrorMessage';
import type { Post } from '../../../services/types';
import { SimplePagination } from '../../layout/SimplePagination';
import { useState, type FC } from 'react';

interface Props {
  itemsPerPageParam: number;
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

const PostsGrid: FC<Props> = observer(({ itemsPerPageParam }) => {
  const { postsStore } = rootStore;
  const { isLoadingPosts, errorPosts, posts } = postsStore;
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageParam);
  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h2" gutterBottom>
        Posts {!isLoadingPosts && posts.length > 0 && `(${posts.length})`}
      </Typography>
      {errorPosts && <ErrorMessage error={errorPosts} />}
      {!errorPosts && (
        <Grid container spacing={3}>
          {isLoadingPosts ? (
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <Grid
                key={`post-skeleton-${index}`}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <PostCardSkeleton />
              </Grid>
            ))
          ) : (
            postsStore
              .getPaginatedPosts(itemsPerPage)
              .map((post: Post) => (
                <Grid
                  key={post.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                  <PostCard post={post} />
                </Grid>
              ))
          )}
        </Grid>
      )}
      {posts.length > 0 && !isLoadingPosts && !errorPosts && (
        <SimplePagination
          totalItems={posts.length}
          onPageChange={(page) => postsStore.setPostPage(page)}
          onItemsPerPageChange={(count) => setItemsPerPage(count)}
          gridName="posts"
          itemsPerPageParam={itemsPerPage}
          firstPage={postsStore.currentPostPage}
        />
      )}
    </Stack>
  );
});

export default PostsGrid;