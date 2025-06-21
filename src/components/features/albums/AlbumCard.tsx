import { Stack, Typography } from '@mui/material';
import type { Album } from '../../../services/types';
import { AppCard } from '../../AppCard';

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard = ({ album }: AlbumCardProps) => (
  <AppCard>
    <Stack spacing={2} sx={{ justifyContent: 'space-between', height: '100%' }}>
      <Typography variant="h6" component="h3" sx={{ lineHeight: 1.3 }} >
        {album.title}
      </Typography>      
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          User ID: {album.userId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Album ID: {album.id}
        </Typography>
      </Stack>
    </Stack>
  </AppCard>
);