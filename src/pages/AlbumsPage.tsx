import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { rootStore } from '../state-management/RootStore';
import AlbumsGrid from '../components/features/albums/AlbumsGrid';
import { SimplePagination } from '../components/layout/SimplePagination';

export const AlbumsPage = observer(() => {
  const { albumsStore } = rootStore;

  useEffect(() => {
    albumsStore.fetchAlbums();
  }, []);
  
  return (
    <AlbumsGrid/>    
  );
});