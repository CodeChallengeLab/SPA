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
  const { postsUsersStore } = rootStore;

  const handleFetchData = () => {
    postsUsersStore.fetchCombinedData();
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        p: 0,
        m: 0,
      }}
    >
      <Box sx={{ py: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Posts and Users
        </Typography>

        <Box
          sx={{
            p: 4,
            mb: 4,
            textAlign: 'center'
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography variant="body1" color="text.secondary">
              Click the button to fetch Posts and Users simultaneously
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleFetchData}
              disabled={postsUsersStore.isLoading}
              sx={{ minWidth: 160 }}
            >
              {postsUsersStore.isLoading ? (
                <Stack direction="row" spacing={1} alignItems="center">
                  <CircularProgress size={20} color="inherit" />
                  <span>Loading...</span>
                </Stack>
              ) : (
                'Fetch Data'
              )}
            </Button>
          </Stack>
        </Box>
        {postsUsersStore.errorPosts && (
          <ErrorMessage
            error={
              postsUsersStore.errorPosts === 'Network Error'
                ? 'Failed to fetch posts: No connection to server'
                : postsUsersStore.errorPosts
            }
          />
        )}
        {postsUsersStore.errorUsers && (
          <ErrorMessage
            error={
              postsUsersStore.errorUsers === 'Network Error'
                ? 'Failed to fetch users: No connection to server'
                : postsUsersStore.errorUsers
            }
          />
        )}

        {postsUsersStore.isLoading && (
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

        {postsUsersStore.hasData && (
          <Box>
            <PostsGrid itemsPerPageParam={8} />
            <UsersGrid itemsPerPageParam={4} />
          </Box>
        )}
      </Box>
    </Container>
  );
});