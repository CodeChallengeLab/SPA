import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Alert
} from '@mui/material';
import { rootStore } from '../state-management/RootStore';
import PostsGrid from '../components/features/combined/PostsGrid';
import UsersGrid from '../components/features/combined/UsersGrid';

export const PostsUsersPage = observer(() => {
  const { postsStore, usersStore } = rootStore;
  const { fetchPostsData, isLoadingPosts, errorPosts, posts } = postsStore;  
  const { fetchUsersData, isLoadingUsers, errorUsers, users } = usersStore;
  const [hasInitiatedFetch, setHasInitiatedFetch] = useState(false);  

  const handleFetchData = () => {
    setHasInitiatedFetch(true);
    fetchPostsData();
    fetchUsersData();
  };

  const isLoading = isLoadingPosts || isLoadingUsers;
  const hasData = posts.length > 0 || users.length > 0;
  const hasErrors = errorPosts || errorUsers;  
  const shouldShowContent = hasData || isLoading || hasInitiatedFetch;

  return (
    <Container maxWidth={false} disableGutters>
      <Stack spacing={3}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Posts and Users
        </Typography>        
        <Stack spacing={2} alignItems="center">
          <Button
            variant="contained"
            size="large"
            onClick={handleFetchData}
            disabled={isLoading}
            sx={{ minWidth: 160 }}
          >
            {isLoading ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <CircularProgress size={20} color="inherit" />
                <span>Loading...</span>
              </Stack>
            ) : (
              hasData ? 'Refresh Data' : 'Fetch Data'
            )}
          </Button>
        </Stack>       
        {shouldShowContent && (
          <Box>            
            <PostsGrid itemsPerPageParam={8} />
            <UsersGrid itemsPerPageParam={4} />
          </Box>
        )}        
        {hasInitiatedFetch && !isLoading && !hasData && hasErrors && (
          <Alert severity="info" sx={{ textAlign: 'center' }}>
            <Typography variant="h6">Unable to load data</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Please check your connection and try again
            </Typography>
            <Button 
              variant="outlined" 
              onClick={handleFetchData}
              size="small"
            >
              Try Again
            </Button>
          </Alert>
        )}
      </Stack>
    </Container>
  );
});