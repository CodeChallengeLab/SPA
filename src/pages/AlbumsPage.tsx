import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, Typography, Box } from '@mui/material';
import { rootStore } from '../state-management/RootStore';
import { AlbumCard } from '../components/features/albums/AlbumCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const AlbumsPage = observer(() => {
  const { albumsStore } = rootStore;

  useEffect(() => {
    albumsStore.fetchAlbums();
  }, [albumsStore]);

  if (albumsStore.isLoading) {
    return <LoadingSpinner message="Loading albums..." />;
  }

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Albums
      </Typography>
      
      {albumsStore.error && <ErrorMessage error={albumsStore.error} />}
      
      <Grid container spacing={3}>
        {albumsStore.albums.map((album) => (
          <Grid key={album.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <AlbumCard album={album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});