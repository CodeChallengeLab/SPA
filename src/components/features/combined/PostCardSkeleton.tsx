import { Skeleton, Stack, Box, Divider } from '@mui/material';
import { AppCard } from '../../AppCard';

export const PostCardSkeleton = () => (
  <AppCard>
    <Stack spacing={1} sx={{ height: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Skeleton
          variant="text"
          width="85%"
          height={32}
          sx={{ mb: -0.5 }}
          animation="wave"
        />
        <Skeleton
          variant="text"
          width="95%"
          height={120}
          animation="wave"
        />
      </Box>
      <Divider sx={{ mt: 'auto' }} />
      <Skeleton
        variant="text"
        width="55%"
        height={16}
        sx={{ fontSize: '0.75rem', mt: 1 }}
        animation="wave"
      />
    </Stack>
  </AppCard>
);