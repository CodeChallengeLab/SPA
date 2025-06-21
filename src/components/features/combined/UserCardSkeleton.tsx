import { Skeleton, Stack, Box } from '@mui/material';
import { AppCard } from '../../AppCard';

export const UserCardSkeleton = () => (
  <AppCard>
    <Stack spacing={1}>        
      <Skeleton 
        variant="text" 
        width="70%" 
        height={28}
        sx={{ fontSize: '1.25rem' }} 
        animation="wave"
      />      
      <Skeleton 
        variant="text" 
        width="85%" 
        height={100}
        sx={{ fontSize: '0.875rem' }}
        animation="wave"
      />      
      <Box sx={{ mt: 2 }}>
        <Skeleton 
          variant="rounded" 
          width="50%" 
          height={24}
          sx={{ borderRadius: 10 }} 
          animation="wave"
        />
      </Box>
    </Stack>
  </AppCard>
);