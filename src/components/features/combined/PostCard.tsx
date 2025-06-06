import { Typography } from '@mui/material';
import type { Post } from '../../../services/types';
import { AppCard } from '../../AppCard';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => (
  <AppCard>
    <Typography variant="h6" component="h3" gutterBottom>
      {post.title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
      {post.body}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      Post ID: {post.id} | User ID: {post.userId}
    </Typography>
  </AppCard>
);