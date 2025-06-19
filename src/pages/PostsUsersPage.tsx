import { observer } from 'mobx-react-lite';
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  CircularProgress
} from '@mui/material';
import { rootStore } from '../state-management/RootStore';
import PostsGrid from '../components/features/combined/PostsGrid';
import UsersGrid from '../components/features/combined/UsersGrid';
import { ErrorMessage } from '../components/ErrorMessage';

export const PostsUsersPage = observer(() => {
  const { postsStore, usersStore } = rootStore;

  const handleFetchData = () => {
    postsStore.fetchPostsData();
    usersStore.fetchUsersData();

  };

  const combinedIsLoading = postsStore.isLoadingPosts || usersStore.isLoadingUsers;
  const hasCombinedData = postsStore.hasPostsData || usersStore.hasUsersData;

  return (
    <Container
      maxWidth={false}
      disableGutters
    >
      <Stack spacing={3} >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Posts and Users
        </Typography>
        <Stack spacing={2} alignItems="center">
          <Button
            variant="contained"
            size="large"
            onClick={handleFetchData}
            disabled={combinedIsLoading}
            sx={{ minWidth: 160 }}
          >
            {combinedIsLoading ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <CircularProgress size={20} color="inherit" />
                <span>Loading...</span>
              </Stack>
            ) : (
              'Fetch Data'
            )}
          </Button>
        </Stack>
        {postsStore.errorPosts && (
          <ErrorMessage
            error={
              postsStore.errorPosts === 'Network Error'
                ? 'Failed to fetch posts: No connection to server'
                : postsStore.errorPosts
            }
          />
        )}
        {usersStore.errorUsers && (
          <ErrorMessage
            error={
              usersStore.errorUsers === 'Network Error'
                ? 'Failed to fetch users: No connection to server'
                : usersStore.errorUsers
            }
          />
        )}

        {combinedIsLoading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ py: 8 }}
          >
            <Stack spacing={2} alignItems="center">
              <CircularProgress size={48} />
              <Typography variant="body2" color="text.secondary">
                Fetching posts and users...
              </Typography>
            </Stack>
          </Box>
        )}

        {hasCombinedData && (
          <Box>
            <PostsGrid itemsPerPageParam={8} />
            <UsersGrid itemsPerPageParam={4} />
          </Box>
        )}
      </Stack>
    </Container>
  );
});
