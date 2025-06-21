import { Box, Stack, Typography } from '@mui/material';
import type { Post } from '../../../services/types';
import { AppCard } from '../../AppCard';
import { rootStore } from '../../../state-management/RootStore';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const { usersStore } = rootStore;

  const user = usersStore.users.find((user) => user.id === post.userId);
  const userName = user ? user.name : 'Unknown User';
  return (
    <AppCard>
      <Stack spacing={1} sx={{ height: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h3" sx={{ lineHeight: 1.1 }} gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.15 }}>
            {post.body}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 'auto',
            pt: 1,
            borderTop: 1,
            borderColor: 'divider',
            fontSize: '0.75rem'
          }}
        >
          Post: {post.id} | {userName}
        </Typography>
      </Stack>
    </AppCard>
  );
}