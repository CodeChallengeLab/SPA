import { observer } from 'mobx-react-lite';
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  Paper,
  CircularProgress,
  Container,
  Stack,
  Alert,
} from '@mui/material';
import { rootStore } from '../state-management/RootStore';
import { PostCard } from '../components/features/combined/PostCard';
import { UserCard } from '../components/features/combined/UserCard';
import type { Post } from '../services/types';
import type { User } from '../services/types';

export const CombinedPage = observer(() => {
  const { combinedStore } = rootStore;

  const handleFetchData = () => {
    combinedStore.fetchCombinedData();
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Combined Data
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
              disabled={combinedStore.isLoading}
              sx={{ minWidth: 160 }}
            >
              {combinedStore.isLoading ? (
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

        {combinedStore.error && (
          <Alert 
            severity="error" 
            sx={{ mb: 3 }}
            variant="filled"
          >
            {combinedStore.error}
          </Alert>
        )}
        
        {combinedStore.isLoading && (
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
        
        {combinedStore.hasData && (
          <Box>
            {/* Posts Section */}
            <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
              Posts ({combinedStore.posts.length})
            </Typography>
            <Grid 
              container 
              spacing={3} 
              sx={{ mb: 4 }}
            >
              {combinedStore.posts.slice(0, 6).map((post: Post) => (
                <Grid 
                  key={post.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <PostCard post={post} />
                </Grid>
              ))}
            </Grid>
            
            <Divider sx={{ my: 4 }} />
            
            {/* Users Section */}
            <Typography variant="h4" component="h2" gutterBottom>
              Users ({combinedStore.users.length})
            </Typography>
            <Grid 
              container 
              spacing={3}
            >
              {combinedStore.users.map((user: User) => (
                <Grid 
                  key={user.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                  <UserCard user={user} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
});