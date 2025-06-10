import { observer } from 'mobx-react-lite';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  CircularProgress,
  Alert
} from '@mui/material';
import { rootStore } from '../state-management/RootStore';
import PostsGrid from '../components/features/combined/PostsGrid';
import UsersGrid from '../components/features/combined/UsersGrid';

export const PostsUsersPage = observer(() => {
  const { postsUsersStore } = rootStore;

  const handleFetchData = () => {
    postsUsersStore.fetchCombinedData();
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Posts and Users
        </Typography>
        
        <Paper
          elevation={2}
          sx={{
            p: 4,
            mb: 4,
            textAlign: 'center',
            borderRadius: 2
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
        </Paper>

        {postsUsersStore.error && (
          <Alert
            severity="error"
            sx={{ mb: 3 }}
            variant="filled"
          >
            {postsUsersStore.error}
          </Alert>
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
            <PostsGrid itemsPerPageParam={8}/>
            <UsersGrid itemsPerPageParam={4}/>
          </Box>
        )}
      </Box>
    </Container>
  );
});