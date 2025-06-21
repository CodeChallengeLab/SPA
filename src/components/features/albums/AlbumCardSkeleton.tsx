import { Skeleton, Stack } from '@mui/material';
import { AppCard } from '../../AppCard';

export const AlbumCardSkeleton = () => (
  <AppCard>
    <Stack spacing={2} sx={{ justifyContent: 'space-between', height: '100%' }}>
      <Skeleton
        variant="text"
        width="80%"
        height={32}
        animation="wave"
      />
      <Stack spacing={0.5}>
        <Skeleton
          variant="text"
          width="25%"
          height={20}
          animation="wave"
        />
        <Skeleton
          variant="text"
          width="30%"
          height={20}
          animation="wave"
        />
      </Stack>
    </Stack>
  </AppCard>
);