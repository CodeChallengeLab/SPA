import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { rootStore } from '../state-management/RootStore';
import AlbumsGrid from '../components/features/albums/AlbumsGrid';
import { Alert, Container } from '@mui/material';

export const AlbumsPage = observer(() => {
  const { albumsStore } = rootStore;

  useEffect(() => {
    albumsStore.fetchAlbums();
  }, []);

  if (albumsStore.error) {
    return (
      <Alert severity="error" sx={{ my: 4 }}>
        {albumsStore.error}
      </Alert>
    );
  }
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

      <AlbumsGrid itemsPerPageParam={8} />
    </Container>
  );
});

