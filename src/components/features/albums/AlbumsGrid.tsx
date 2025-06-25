import { Box, Typography, Grid, Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import { rootStore } from "../../../state-management/RootStore";
import { ErrorMessage } from "../../ErrorMessage";
import { AlbumCard } from "./AlbumCard";
import { AlbumCardSkeleton } from "./AlbumCardSkeleton";
import { SimplePagination } from "../../layout/SimplePagination";
import { useState, type FC } from "react";

interface Props {
  itemsPerPageParam: number;
}

let firstPage = 1;

const AlbumsGrid: FC<Props> = observer(({ itemsPerPageParam }) => {
  const { albumsStore } = rootStore;
  const { albums, isLoading, error } = albumsStore;
  firstPage = albumsStore.currentPage;
  const [page, setPage] = useState(albumsStore.currentPage);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageParam);  
  
  
  return (
    <Stack spacing={3}>
      <Typography variant="h3" component="h1" gutterBottom>
        Albums
      </Typography>      
      {error && <ErrorMessage error={error}/>}      
      <Grid container spacing={3} >
        {isLoading && !  error ? (          
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <Grid 
              key={`skeleton-${index}`} 
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            >
              <Box sx={{ height: '100%' }}>
                <AlbumCardSkeleton />
              </Box>
            </Grid>
          ))
        ) : (          
          albums
            .slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
            .map((album) => (
              <Grid 
                key={album.id} 
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <Box sx={{ height: '100%' }}>
                  <AlbumCard album={album} />
                </Box>
              </Grid>
            ))
        )}
      </Grid>
      
      {albums.length > 0 && !isLoading && (
        <SimplePagination
          totalItems={albums.length}
          onPageChange={(page) => { 
            setPage(page); 
            albumsStore.currentPage=page; 
          }}
          onItemsPerPageChange={(count) => { setItemsPerPage(count) }}
          gridName="albums"
          itemsPerPageParam={itemsPerPage}
          firstPage={firstPage}
        />
      )}
    </Stack>
  );
});

export default AlbumsGrid;

