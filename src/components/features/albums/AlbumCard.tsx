import { Typography } from '@mui/material';
import type { Album } from '../../../services/types';
import { AppCard } from '../../AppCard';

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard = ({ album }: AlbumCardProps) => (
  <AppCard>
    <Typography variant="h6" component="h3" gutterBottom>
      {album.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      User ID: {album.userId}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Album ID: {album.id}
    </Typography>
  </AppCard>
);