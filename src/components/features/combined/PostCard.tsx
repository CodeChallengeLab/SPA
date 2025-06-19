import { Typography } from '@mui/material';
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
      <Typography variant="h6" component="h3" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {post.body}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Post: {post.id} | {userName}
      </Typography>
    </AppCard>
  );
}