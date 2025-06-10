import { Box, Typography, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { rootStore } from "../../../state-management/RootStore";
import { ErrorMessage } from "../../ErrorMessage";
import LoadingSpinner from "../../LoadingSpinner";
import { AlbumCard } from "./AlbumCard";
import { SimplePagination } from "../../layout/SimplePagination";
import { useState, type FC } from "react";
interface Props {
  itemsPerPageParam: number;
}
const AlbumsGrid: FC<Props> = observer(({itemsPerPageParam}) => {  
  const { albumsStore } = rootStore;
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageParam); 
  console.log(startIndex);
  if (albumsStore.isLoading) {

    return <LoadingSpinner message="Loading albums..." />;
  }

  return (
    <Box> 
      <Typography variant="h3" component="h1" gutterBottom>
        Albums
      </Typography>
      
      {albumsStore.error && <ErrorMessage error={albumsStore.error} />}
      
      {albumsStore.albums.length > 0 && (
        <>
          <Grid container spacing={3}>
            {albumsStore.albums.slice(startIndex, startIndex + itemsPerPage).map((album) => (
              <Grid key={album.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <AlbumCard album={album} />
              </Grid>
            ))}
          </Grid>
          <SimplePagination                    
            totalItems={albumsStore.albums.length}           
            onPageChange={(index) => {setStartIndex(index)}}     
            onItemsPerPageChange={(count) => {setItemsPerPage(count)}}     
            gridName="albums"
            itemsPerPageParam={itemsPerPage}
          />
        </>
      )}
    </Box>
  );
});

export default AlbumsGrid;